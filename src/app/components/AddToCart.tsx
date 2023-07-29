"use client"
import { addCart } from "../cart/Features/cartSlice";
import { ProductsType } from "../const/interface";
import { useAppDispatch, useAppSelector } from "../store";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

interface AddToCartProps {
  product: ProductsType
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {

  const dispatch = useAppDispatch();

  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/cart", {
        cartItems: { ...product }
      });
      toast.success('Product added into Cart')
      dispatch(addCart(product));
    } catch (e) {
      toast.success('Failed to add into Cart')
      console.log(e);
    }
  }

  return (
    <>
      <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border: "none" }}
        onClick={() => {
          addToCart();
        }}
      >
        Add To Cart
      </button>
      <Toaster
        position="bottom-right"
      />
    </>
  );
};

export default AddToCart;