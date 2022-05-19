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
            
            if (payload.jwt) {
                localStorage.setItem('token', payload.jwt)
                window.location.href ='/dashboard'
            } else state.error = true
            // state.result = payload
        },
    },
})
export default loginSlice.reducer;