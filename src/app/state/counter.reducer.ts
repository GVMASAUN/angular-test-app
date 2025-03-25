import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./conter.actions";

//Initial state
export const initialState = 0;

//Reducer function
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state -1),
    on(reset, () => initialState)
);