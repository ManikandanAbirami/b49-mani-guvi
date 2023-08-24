import React, { useReducer } from 'react'

const initialState = { totalToys: 0, toysSold: 0};

function toyStoreReducer(state, action) {
    switch (action.type) {
        case 'BUY_TOY':
            return {...state, totalToys: state.totalToys + 1 }
        case 'RETURN_TOY':
            return {...state, totalToys: state.totalToys - 1, toysSold: state.toysSold + 1}
        default:
            return state;
    }
}

function ToyStore() {
    const [storeState, dispatch] = useReducer(toyStoreReducer, initialState);

    const handleBuyToy = () => {
        console.log(...storeState + " %%%%%%")
        dispatch({type: 'BUY_TOY'});
    }

    const handleReturnToy = () => {
        dispatch({type: 'RETURN_TOY'});
    }
  return (
    <div>
        <h1>Toy Store</h1>
        <p>Total toys in store: {storeState.totalToys}</p>
        <p>Toys sold: {storeState.toysSold}</p>
        <button onClick={handleBuyToy}>Buy Toy</button>
        <button onClick={handleReturnToy}>Return Toy</button>
    </div>
  )
}

export default ToyStore