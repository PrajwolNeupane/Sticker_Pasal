import { ProductsType } from "@/app/const/interface";
import axios from "axios";

interface PaymentData {
  paymentToken: string;
  paymentMethod:string,
  name:string,
  email:string,
  number:string,
  address:string,
  orderItems:Array<ProductsType>,
  onSucess:(id:string)=>void
}

export async function onSuccess(data:PaymentData) {
  try {

    const response = await  axios.post(`/api/order`,{paymentToken:data.paymentToken,paymentMethod:data.paymentMethod,name:data.name,email:data.email,number:data.number,address:data.address,orderItems:data.orderItems})
    data.onSucess(response.data.order._id);
  } catch (e) {
    console.log(e);
  }
}
