import StateProviderLayout from "@/LayOut/StateProviderLayout";
import Link from "next/link";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";


export default function Page() {

    return (
        <StateProviderLayout>
            <div className="w-100 px-5 bg-body-tertiary d-flex flex-column gap-4">
                <div className="bg-dark-subtle w-100 py-5 px-5 d-flex justify-content-between align-items-end" style={{ height: "150px" }}>
                    <h1 className="fs-2 text-dark" style={{ fontWeight: "700" }}>CART</h1>
                    <h1 className="fs-6 text-secondary" style={{ fontWeight: "500" }}><Link href={"/"} className="text-decoration-none text-dark">
                        HOME</Link> / CART</h1>
                </div>
                <h1 className="fs-4 fw-bolder text-dark">SHOPPING CART</h1>
                <div className="d-flex gap-5">
                    <div className="bg-dark-subtle p-4" style={{ width: "70%" }}>
                        <CartTable />
                    </div>
                    <CartTotal />
                </div>

            </div>
        </StateProviderLayout>
    )
}