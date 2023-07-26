import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: [true, "Please provide a Owner ID"],
  },
  cartItems: {
    type: Array,
  }
});

const Cart = mongoose.models.cart || mongoose.model("cart", cartSchema);

export default Cart;
