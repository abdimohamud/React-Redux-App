// export const initialState = {
//   data: {
//     name: "michael",
//     country: [
//       {
//         country_id: "US",
//         probability: 0.08986482266532715
//       },
//       {
//         country_id: "AU",
//         probability: 0.05976757527083082
//       },
//       {
//         country_id: "NZ",
//         probability: 0.04666974820852911
//       }
//     ]
//   }
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH":
//       return state;
//     default:
//       return state;
//   }
// };

import {
  FETCH_FACTS,
  FETCH_FACTS_ERROR,
  FETCH_FACTS_SUCCESS
} from "../actions";

const initialState = {
  data: {
    name: "mike",
    country: [
      {
        country_id: "CA",
        probability: 0.07965920715696086
      },
      {
        country_id: "US",
        probability: 0.048790808061964945
      },
      {
        country_id: "MW",
        probability: 0.040686740992920904
      }
    ]
  },
  loadingFacts: true,
  errorMessage: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FACTS:
      return {
        ...state,
        loadingFacts: true
      };
    case FETCH_FACTS_ERROR:
      return {
        ...state, // handle the error
        loadingFacts: false,
        errorMessage: action.payload.message
      };
    case FETCH_FACTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loadingFacts: false
      };
    default:
      return state;
  }
};
