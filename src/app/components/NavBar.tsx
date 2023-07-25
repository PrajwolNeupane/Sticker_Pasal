import Link from "next/link";
import { cookies } from 'next/headers'
import LogOutButton from "./LogOutButton";

export function checkAuthentication() {
  const cookieStore = cookies()
  const token = cookieStore.get('token') || null;
  if (token) {
    return true;
  } else {
    return false;
  }
}

export default function NavBar() {

  const isAuthenticated = checkAuthentication();

  return (
    <nav className="navbar sticky-top px-5 py-3 bg-body-secondary">
      <h1 className="fs-3 text-dark" style={{ fontWeight: 700 }}>Sticker Nepal</h1>
      <div className="d-flex gap-5">
        <Link href={"/"} className="fs-5 fw-normal navbar-brand text-dark">
          Home
        </Link>
        {
          isAuthenticated ? <LogOutButton /> : <Link href={"/login"} className="fs-5 fw-normal navbar-brand text-dark">
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
