'use client';
import NavBar from "./NavBar";
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from "react";
import axios from "axios";
import { setCart } from "@/app/cart/Features/cartSlice";



export default function NavLayout({ children }: any) {

    const { auth } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {

        const getCartData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/cart");
                dispatch(setCart(response.data.cartItems.cartItems));
            } catch (e) {
                console.log(e);
            }
        }

        if (auth) {
            getCartData();
        }
    }, [auth]);

    return (
        <>
            <NavBar />
            {children}
        </>
    )
} 