import { createSlice } from '@reduxjs/toolkit'
import { auth } from './thunk'

const initialState = {
    result: {},
    error: false,
    loading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {        
        [auth.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = payload.jwt ? false : true
            state.result = payload
        },
    },
})
export default loginSlice.reducer;