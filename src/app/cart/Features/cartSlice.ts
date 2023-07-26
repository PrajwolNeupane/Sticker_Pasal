import { ProductsType } from '@/app/const/interface';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    cart:Array<ProductsType> | [];
}

const initialState:InitialState = {
    cart: [] 
}
const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        setCart:(state,action: PayloadAction<Array<ProductsType>>) => {
            state.cart = action.payload
        },
        addCart:(state,action: PayloadAction<ProductsType>) => {
            state.cart = [...state.cart,action.payload]
        }
    }, 
});

export default CartSlice.reducer;
export const {setCart,addCart} = CartSlice.actions; 