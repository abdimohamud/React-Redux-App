import axios from "axios";

// ACTION TYPES
export const FETCH_FACTS = "FETCH_FACTS";
export const FETCH_FACTS_SUCCESS = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_ERROR = "FETCH_FACTS_ERROR";

// ACTION CREATORS
export const getNameData = (name) => {
  const url = `https://api.nationalize.io/?name=${name}`;
  return (dispatch) => {
    dispatch({ type: FETCH_FACTS });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_FACTS_SUCCESS, payload: response.data });
        // console.log(response.data);
      })
      .catch((error) => {
        dispatch({
          type: FETCH_FACTS_ERROR,
          payload: { message: "Whoops! Can't seem to predict a nationality" }
        });
      });
  };
};
