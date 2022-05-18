import { createAsyncThunk } from '@reduxjs/toolkit'

export const auth = createAsyncThunk(
    'login/auth',
    async (data, thunkAPI) => {        
        const res = await fetch('http://localhost:1337/auth/local',{
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
