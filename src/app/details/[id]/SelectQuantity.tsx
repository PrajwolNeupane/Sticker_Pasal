"use client"
import { useState } from "react"

export default function SelectQuantity() {

    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="d-flex align-items-center gap-1">
            <h5 className="fs-6 text-body-secondary">QUANTITY</h5>
            <span className="material-symbols-outlined fs-1 text-dark" onClick={() => {
                if (quantity > 1) {
                    setQuantity(quantity - 1);
                }
            }} style={{ cursor: "pointer" }}>
                arrow_left
            </span>
            <h5 style={{ lineHeight: "0", marginTop: "5px" }}>{quantity}</h5>
            <span className="material-symbols-outlined fs-1 text-dark" style={{ cursor: "pointer" }} onClick={() => {
                setQuantity(quantity + 1);
            }}>
                arrow_right
            </span>
            <button className="mt-3 mb-2 bg-dark text-white px-4 py-2" style={{fontWeight:"400",border:"none"}} 
            onClick={()=>{
                alert(quantity)
            }}>
                Add to Cart
            </button>
        </div>
    )
}