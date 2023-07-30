import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
  },
  paymentToken:{
    type:String
  },
  name:{
    type:String
  },
  email:{
    type:String,
  },
  number:{
    type:String,
  },
  address:{
    type:String,
  },
  orderItems: {
    type: Array,
  },
});

const Cart = mongoose.models.order || mongoose.model("order", orderSchema);

export default Cart;
