import axios from "axios";

// ACTION TYPES
export const FETCH_QUOTES = "FETCH_QUOTES";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_ERROR = "FETCH_QUOTES_ERROR";

// ACTION CREATORS
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_QUOTES });
    axios
      .get("https://programming-quotes-api.herokuapp.com/quotes/page/2")
      .then((response) => {
        dispatch({ type: FETCH_QUOTES_SUCCESS, payload: response.data });
        console.log(response)
      })
      .catch((error) => {
        dispatch({
          type: FETCH_QUOTES_ERROR,
          payload: { message: "Whoops! Can't get your cat facts for you!" }
        });
      });
  };
};