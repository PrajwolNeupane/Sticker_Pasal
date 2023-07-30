"use client"

import { useState, useEffect } from "react";
import { useAppSelector } from "../store";
import { Toaster, toast } from "react-hot-toast";
import KhaltiCheckout from "khalti-checkout-web";
import config from './Features/KhaltiGatewayConfig';
import axios from "axios";
import OrderPlaced from "./OrderPlaced";

interface CheckOutModalProps {
    open: boolean;
    setClose: () => void
}

const CheckOutModal: React.FC<CheckOutModalProps> = ({ open, setClose }) => {

    let checkout = new KhaltiCheckout(config);

    const { auth } = useAppSelector((state) => state.auth);
    const { cart } = useAppSelector((state) => state.cart);
    const [openOrder,setOpenOrder]  = useState(false);
    const [orderId,setOrderId] = useState(null);

    const [orderData, setOrderData] = useState({ name: auth?.name, email: auth?.email, number: auth?.phoneNumber, address: "", paymentMethod: null });

    useEffect(() => {
        setOrderData({ name: auth?.name, email: auth?.email, number: auth?.phoneNumber, address: "", paymentMethod: null })
        if (open) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'auto'
        }
    }, [open]);

    const placeOrderAction = async () => {
        if (orderData.name == "") {
            toast.error('Name is Required')
        }
        else if (orderData.email == "") {
            toast.error('Email is Required')
        }
        else if (orderData.address == "") {
            toast.error('Address is Required')
        }
        else if (orderData.number == "") {
            toast.error('Number is Required')
        }
        else if (orderData.number?.length != 10) {
            toast.error('Number is not valid')
        }
        else if (orderData.paymentMethod == null) {
            toast.error('Payment Method is Required')
        }
        else {
            try {
                // checkout.show({ amount: 2500 });
                if (orderData.paymentMethod == "Cash on Delivery") {
                    const response = await axios.post("/api/order", {
                        ...orderData,
                        orderItems: cart
                    });
                    console.log(response.data);
                    setOpenOrder(true);
                    setOrderId(response.data.order._id);
                    toast.success('Order has been placed')
                    setClose();
                }

            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
       <>
        <div style={{ width: "100vw", height: "100vh", backgroundColor: 'rgb(68, 69, 68,0.7)', position: "fixed", top: '0px', left: "0px", zIndex: 999, display: `${open ? 'flex' : 'none'}` }} id="modal" onClick={(e: any) => {
            if (e.target.id == 'modal') {
                setClose();
            }
        }}>
            <div className="bg-light-subtle py-3 px-5 flex-column justify-content-between" style={{ display: `${open ? 'flex' : 'none'}`, width: "80vw", position: "absolute", height: "500px", top: "50%", left: "50%", transform: 'translate(-50%, -50%)', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                <div className="d-flex justify-content-between w-100">
                    <h2 className="text-dark">CheckOut</h2>
                    <span className="material-symbols-outlined text-dark" style={{ cursor: "pointer", fontSize: "50px" }} onClick={() => {
                        setClose()
                    }}>
                        close
                    </span>
                </div>
                <label>Name*</label>
                <input placeholder="Joe Doe" value={orderData.name} name="name" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Email*</label>
                <input placeholder="joedoe@gmail.com" value={orderData.email} name="email" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Phone Number*</label>
                <input placeholder="123456789" value={orderData.number} name="number" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Address*</label>
                <input placeholder="Location" value={orderData.address} name="address" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Payement Method*</label>
                <div className="d-flex justify-content-between" style={{ width: "25%" }}>
                    <label>
                        <input type="radio" name="paymentMethod" value="Khalti" onChange={(e) => {
                            setOrderData({ ...orderData, [e.target.name]: e.target.value });
                        }} />Khalti</label>
                    <label>
                        <input type="radio" name="paymentMethod" value="Cash on Delivery" onChange={(e) => {
                            setOrderData({ ...orderData, [e.target.name]: e.target.value });
                        }} />
                        Cash on Delivery
                    </label>
                </div>
                <button className="bg-dark text-white px-4 py-2" style={{ margin: "10px auto", width: "300px", fontWeight: "600", border: "none" }} onClick={() => {
                    placeOrderAction();
                }}>Place Order</button>
            </div>
          
        </div>
          <Toaster
          position="bottom-right"
      />
      <OrderPlaced open={openOrder} setClose={()=>{
        setOpenOrder(false);
      }} id={orderId!}/>
      </>
    );
};

export default CheckOutModal;
