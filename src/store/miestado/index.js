import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from './thunk'

const initialState = {
    list: [],
    loading: false,
}

const miEstadoSlice = createSlice({
    name: 'miestado',
    initialState,
    extraReducers: {        
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = payload
        },
    },
})
export default miEstadoSlice.reducer;