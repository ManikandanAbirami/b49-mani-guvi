import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        incrementCart: (state) => state + 2,
        decrementCart: (state) => state - 2,
        resetCart: () => 0,
    },
});

export const { incrementCart, decrementCart, resetCart } = cartSlice.actions; //Obj destructuring!
export default cartSlice.reducer
