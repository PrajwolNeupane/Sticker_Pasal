"use client"
import { setCart } from "../cart/Features/cartSlice";
import { ProductsType } from "../const/interface";
import { useAppDispatch } from "../store";

interface AddToCartProps {
  product:ProductsType
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {

  const dispatch = useAppDispatch();

  const addToCart = () => {
    try {
      dispatch(setCart(product));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border: "none" }}
      onClick={() => {
        addToCart();
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;