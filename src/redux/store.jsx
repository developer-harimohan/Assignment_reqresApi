import { configureStore } from '@reduxjs/toolkit'
import { addIdSlice } from './addIdSlice'
import { authSlice } from './authSlice'
import { userSlice } from './userSlice'
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer,
        idFind: addIdSlice.reducer
    },
})