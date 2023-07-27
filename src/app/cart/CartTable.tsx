"use client"
import Image from "next/image";
import { useAppSelector } from "../store";

export function getCartData() {
    const { cart } = useAppSelector((state) => state.cart);
    return cart;
}

export default function CartTable() {

    const cart = getCartData();

    return (
        <table className="w-100" style={{borderSpacing:"0px 10px",borderCollapse:"separate"}}>
            <thead>
                <tr>
                    <th style={{ fontWeight: "700",width:"10%" }} className="fs-5 text-dark">S.N</th>
                    <th style={{ width: "50%", fontWeight: "700" }} className="fs-5 text-dark">Stickers</th>
                    <th style={{ fontWeight: "700" }} className="fs-5 text-dark">Price</th>
                    <th style={{ width: "5%" }}></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((curr, indx) => (
                        <tr key={indx}>
                            <td style={{ fontWeight: "500" }} className="fs-6 text-dark">{indx + 1}</td>
                            <td style={{ fontWeight: "500" }} className=" d-flex gap-2 align-items-center">
                                <Image src={curr.image} alt={curr.name} width={'60'} height={'60'}/>
                                <h2 className="fs-6 text-dark">{curr.name}</h2>
                            </td>
                            <td style={{ fontWeight: "500" }} className="fs-6 text-dark">{curr.price}</td>
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