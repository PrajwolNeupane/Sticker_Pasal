"use client"
import { useEffect } from "react";

interface OrderPlacedProps {
    open: boolean;
    setClose: () => void,
    id:string
}

const OrderPlaced: React.FC<OrderPlacedProps> = ({ open, setClose,id}) => {

    useEffect(() => {
       if(open){
        document.documentElement.style.overflow = 'hidden'
       }else{
        document.documentElement.style.overflow = 'auto'
       }
    }, [open]);

    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: 'rgb(68, 69, 68,0.7)', position: "fixed", top: '0px', left: "0px", zIndex: 999, display: `${open ? 'flex' : 'none'}` }} id="modal" onClick={(e: any) => {
            if (e.target.id == 'modal') {
                setClose();
            }
        }}>
            <div className="bg-light-subtle py-3 px-5 flex-column justify-content-between" style={{ display: `${open ? 'flex' : 'none'}`, width: "80vw", position: "absolute", height: "200px", top: "50%", left: "50%", transform: 'translate(-50%, -50%)', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,alignItems:"center"}}>
                <h2 className="text-dark">Your Order has been placed</h2>
                <p className="text-dark">Please remember your order id. You can also take photo of it.</p>
                <h1 className="text-dark">{id}</h1>
            </div>
        </div>
    )
}

export default OrderPlaced

