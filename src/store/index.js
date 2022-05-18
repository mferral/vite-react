import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import miEstadoReducer from './miestado'
import loginReducer from './login'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        miestado: miEstadoReducer,
        login: loginReducer,
    },
})