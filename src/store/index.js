import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import miEstadoReducer from './miestado'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        miestado: miEstadoReducer,
    },
})