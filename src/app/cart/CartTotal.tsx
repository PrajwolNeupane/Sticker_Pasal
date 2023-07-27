"use client"

import getTotalPrice from "@/helper/getTotalPrice";
import { useAppSelector } from "../store"
import { useEffect,useState } from "react";

export default function CartTotal() {

    const { cart } = useAppSelector((state) => state.cart);
    const [totalPrice,setTotalPrice] = useState<{totalPrice:string,totalPriceWithDelivery:string}>({totalPrice:'',totalPriceWithDelivery:''});

    useEffect(() => {
        if(cart){
            setTotalPrice(getTotalPrice(cart))
        }
    }, [cart]);

    return (
        <div className="p-4 bg-dark-subtle d-flex flex-column" style={{ height: "300px", width: "30%" }}>
            <h2 className="fs-4 fw-bolder text-dark">CART TOTAL</h2>
            <table>
                <tr>
                    <th>Total Items</th>
                    <td style={{ fontWeight: "500" }} className="fs-6 text-dark">{cart.length}</td>
                </tr>
                <tr>
                    <hr style={{ width: "130%" }} />
                </tr>
                <tr>
                    <th>Sub Total</th>
                    <td style={{ fontWeight: "500" }} className="fs-6 text-dark">{totalPrice.totalPrice}</td>
                </tr>
                <tr>
                    <th>Delivery Charge</th>
                    <td style={{ fontWeight: "500" }} className="fs-6 text-dark">Rs. 90</td>
                </tr>
                <tr>
                    <hr style={{ width: "130%" }} />
                </tr>
                <tr>
                    <th>Total</th>
                    <td style={{ fontWeight: "500" }} className="fs-6 text-dark">{totalPrice.totalPriceWithDelivery}</td>
                </tr>
            </table> 
        </div>
    )
}