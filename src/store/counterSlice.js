import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    list_cuadernos: [1,2,3]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
            // const result = await api.post('/post')
            // state.list_cuadernos = [...result]
        },
        decrement: (state) => {
            state.value -= 1
        },
        addElements: (state) => {
            const moreElements = [4,5,6]
            state.list_cuadernos = [...state.list_cuadernos, moreElements]
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    increment,
    decrement,
    incrementByAmount,
    addElements,
} = counterSlice.actions

export default counterSlice.reducer