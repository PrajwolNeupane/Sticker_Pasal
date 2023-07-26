"use client"
import { useAppSelector } from "../store";

export function getCartData() {
    const { cart } = useAppSelector((state) => state.cart);
    return cart;
}

export default function CartTable() {

    const cart = getCartData();

    return (
        <table className="w-100">
            <thead>
                <tr>
                    <th style={{ width: "50%" }}>Stickers</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th style={{ width: "5%" }}></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((curr, indx) => (
                        <tr key={indx}>
                            <td>{curr.name}</td>
                            <td>Hi</td>
                            <td>Hi</td>
                            <td><span className="material-symbols-outlined">
                                delete
                            </span></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}