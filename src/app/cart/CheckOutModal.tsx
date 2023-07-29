"use client"

import { useState, useEffect } from "react";
import { useAppSelector } from "../store";

interface CheckOutModalProps {
    open: boolean;
    setClose: () => void
}

const CheckOutModal: React.FC<CheckOutModalProps> = ({ open, setClose }) => {

    const { auth } = useAppSelector((state) => state.auth);

    const [orderData, setOrderData] = useState({ name: auth?.name, email: auth?.email, number: auth?.phoneNumber, address: "" });

    useEffect(() => {
        setOrderData({ name: auth?.name, email: auth?.email, number: auth?.phoneNumber, address: "" })
        if (open) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'auto'
        }
    }, [open]);

    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:'rgb(68, 69, 68,0.7)',position:"fixed",top:'0px',left:"0px",zIndex:999, display: `${open ? 'flex' : 'none'}`}} id="modal" onClick={(e:any)=>{
            if(e.target.id == 'modal'){
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
                <label>Name</label>
                <input placeholder="Joe Doe" value={orderData.name} name="name" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Email</label>
                <input placeholder="joedoe@gmail.com" value={orderData.email} name="email" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Phone Number</label>
                <input placeholder="123456789" value={orderData.number} name="number" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Address</label>
                <input placeholder="Hi" value={orderData.number} name="address" onChange={
                    (e) => { setOrderData({ ...orderData, [e.target.name]: e.target.value }) }
                } />
                <label>Payement Method</label>
                <label>
                    <input type="radio" name="option" value="option1" />
                    Khalti</label>
                <br />
                <label>
                    <input type="radio" name="option" value="option2" />
                    Cash on Delivery
                </label>
            </div>
        </div>
    );
};

export default CheckOutModal;
