import { createAsyncThunk } from '@reduxjs/toolkit'

export const auth = createAsyncThunk(
    'login/auth',
    async (data, thunkAPI) => {        
        const res = await fetch(`${import.meta.env.VITE_HOST}auth/local`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((data) => data.json())               
        return res
    }
)
