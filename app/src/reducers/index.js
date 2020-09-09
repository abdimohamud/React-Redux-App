 const initialState = {
    slip: { 
        id: 30, 
        advice: "When in doubt, just take the next small step."
    
    }
}

export  const reducer = (state=initialState, action) => {

    switch (action.type){

        case 'FETCH_DATA':
            return state;
        default:
            return state;
    }
}