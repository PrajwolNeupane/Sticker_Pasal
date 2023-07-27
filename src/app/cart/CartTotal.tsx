"use client"

import { useAppSelector } from "../store"

export default function CartTotal() {

    const { cart } = useAppSelector((state) => state.cart);

    return (
        <div className="p-4 bg-dark-subtle d-flex flex-column" style={{ height: "300px", width: "30%" }}>
            <h2 className="fs-4 fw-bolder text-dark">CART TOTAL</h2>
            <table>
                <tr>
                    <th>Total Items</th>
                    <td>{cart.length}</td>
                </tr>
                <tr>
                    <hr style={{ width: "130%" }} />
                </tr>
                <tr>
                    <th>Sub Total</th>
                    <td>{cart.length}</td>
                </tr>
                <tr>
                    <th>Delivery Charge</th>
                    <td>Rs. 90</td>
                </tr>
                <tr>
                    <hr style={{ width: "130%" }} />
                </tr>
                <tr>
                    <th>Total</th>
                    <td>Rs. 90</td>
                </tr>
            </table>
        </div>
    )
}