"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../store";
import { setAuth } from "./NavBar/Features/authSlice";

export default function LogOutButton() {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const logOut = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/user/logout");
            dispatch(setAuth(null));
            router.push("/")
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <h2 className="fs-5 fw-normal navbar-brand text-dark" style={{ cursor: "pointer" }} onClick={() => { logOut() }}>Log Out
        </h2>
    )
}