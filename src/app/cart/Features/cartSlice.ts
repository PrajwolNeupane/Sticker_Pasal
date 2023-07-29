import { ProductsType } from "@/app/const/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  cart: Array<ProductsType> | [];
};

const initialState: InitialState = {
  cart: [],
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Array<ProductsType>>) => {
      state.cart = action.payload;
    },
    addCart: (state, action: PayloadAction<ProductsType>) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteCart: (state, action: PayloadAction<string>) => {
      var index = null;
      var initalArray = state.cart;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload) {
          index = i;
          break;
        }
      }
      if (index != null) {
        initalArray.splice(index, 1);
        state.cart = initalArray
      }
    },
  },
});

export default CartSlice.reducer;
export const { setCart, addCart, deleteCart } = CartSlice.actions;
