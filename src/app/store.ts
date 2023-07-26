import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './components/NavBar/Features/authSlice';
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';
import CartSlice from './cart/Features/cartSlice';

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        cart:CartSlice
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch:()=>AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;