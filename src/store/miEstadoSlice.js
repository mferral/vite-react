import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'miestado/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
        (data) => data.json()
    )    
    return res
})

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