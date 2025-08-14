import {configureStore} from '@reduxjs/toolkit'
import { counterSlice } from '../features/Counter/CounterSlice'

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    },
})

/*
    steps

    create store
    wrap app component under provider
    create slice
    register reducer in store
*/