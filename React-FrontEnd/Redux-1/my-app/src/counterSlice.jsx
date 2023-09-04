import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => 0,
    },
});

export const { increment, decrement, reset } = counterSlice.actions; //Obj destructuring!
export default counterSlice.reducer
