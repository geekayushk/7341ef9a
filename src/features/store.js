import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './phoneSlice'

export const store = configureStore({
    reducer: {
        phones: phoneReducer,
    },
})