import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
       dogs: 0,
       cats: 0
    },
    reducers: {
        incrementdogs: (state) => {
             state.dogs += 1;
        },
        incrementcats: (state) => {
             state.cats += 1;
        }
    }
});

export const { incrementdogs, incrementcats, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;