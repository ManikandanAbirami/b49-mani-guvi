import React, { useReducer, useState }from 'react'

// const [totalToys, setTotalToys] = useState(0);
// const [toysSold, setToysSold] = useState(0);

const initialState = {totalToys:0, toysSold:0};

function toyStoreReducer(state, action) {
    switch(action.type) {
        case 'BUY':
            return {...state, totalToys: state.totalToys+1};
        case 'RETURN':
            return {...state, toysSold: state.toysSold+1, totalToys: state.totalToys-1}
        default:
            return state;
    }

}

function Reduce() {
    const[storeState, dispatch] = useReducer(toyStoreReducer, initialState);

    const handleBuyToy = () => {
        dispatch({ type: 'BUY'});
    }
    
    const handleReturnToy = () => {
        dispatch({ type: 'RETURN'});
    }
  return (
    <div>
        <h1>useReducer Demo:</h1>
        <p>Total toys in store: {storeState.totalToys}</p>
        <p>Toys sold: {storeState.toysSold}</p>
        <button onClick={handleBuyToy}>Buy Toy</button>
        <button onClick={handleReturnToy}>Return Toy</button>
    </div>
  )
}

export default Reduce