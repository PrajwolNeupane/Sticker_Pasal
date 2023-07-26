import Link from "next/link";
import LogOutButton from "../LogOutButton";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { setAuth } from "./Features/authSlice";
import axios from "axios";
import { useEffect } from 'react';


export default function NavBar() {

  const dispatch = useAppDispatch();
  const {auth} = useAppSelector((state) => state.auth);

  useEffect(() => {
    async function getAuth() {
      try {
        const response = await axios.get("http://localhost:3000/api/user/me");
        dispatch(setAuth(response.data.user));
      } catch (e) {
        console.log(e);
        dispatch(setAuth(null));
      }
    }
    getAuth();
  }, []);


  return (
    <nav className="navbar sticky-top px-5 py-3 bg-body-secondary">
      <h1 className="fs-3 text-dark" style={{ fontWeight: 700 }}>Sticker Nepal</h1>
      <div className="d-flex gap-5">
        <Link href={"/"} className="fs-5 fw-normal navbar-brand text-dark">
          Home
        </Link>
        {
          auth !== null ? <LogOutButton /> : <Link href={"/login"} className="fs-5 fw-normal navbar-brand text-dark">
            Log in
          </Link>
        }
        <Link href={"/cart"} className="fs-5 fw-normal navbar-brand text-dark">
          Cart <span className="badge bg-success">0</span>
        </Link>
      </div>
    </nav>
  );
}
