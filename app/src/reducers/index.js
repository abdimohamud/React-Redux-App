// const initialState = {
//     quotes: [
//         {
//             "_id": "5a6ce86f2af929789500e824",
//             "sr": "Jedan od mojih najproduktivnijih dana je bio kada sam bacio 1000 linija koda.",
//             "en": "One of my most productive days was throwing away 1,000 lines of code.",
//             "author": "Ken Thompson",
//             "rating": 3.1,
//             "id": "5a6ce86f2af929789500e824"
//         },
//         {
//             "_id": "5a6ce86f2af929789500e825",
//             "sr": "Jedno precizno merenje vredi više od hiljadu ekspertskih mišljenja.",
//             "en": "One accurate measurement is worth more than a thousand expert opinions.",
//             "author": "Grace Hopper",
//             "rating": 1.4,
//             "id": "5a6ce86f2af929789500e825"
//         },
//     ]
// }

// export  const reducer = (state=initialState, action) => {

//     switch (action.type){

//         case 'FETCH_DATA':
//             return state;
//         default:
//             return state;
//     }
// }


import {
    FETCH_QUOTES,
    FETCH_QUOTES_ERROR,
    FETCH_QUOTES_SUCCESS
  } from "../actions";
  
  const initialState = {
    quotes: [],
    loadingFacts: true,
    errorMessage: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUOTES:
        return {
          ...state,
          loadingFacts: true
        };
      case FETCH_QUOTES_ERROR:
        return {
          ...state, // handle the error
          loadingFacts: false,
          errorMessage: action.payload.message
        };
      case FETCH_QUOTES_SUCCESS:
        return {
          ...state,
          quotes: action.payload,
          loadingFacts: false
        };
      default:
        return state;
    }
  };