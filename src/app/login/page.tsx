"use client"

import Link from "next/link"

export default function Page() {
    return (
        <div className="d-flex w-100 bg-body-secondary align-items-center justify-content-center" style={{ height: "100vh" }}>
            <form className="d-flex flex-column bg-dark-subtle p-3" style={{ width: "33%" }}>
                <h2 className="text-dark" style={{ fontWeight: "700",fontSize:"40px" }}>Log In </h2>
                <br />
                <label>Email: </label>
                <input placeholder="joedoe@gmail.com" type="email" />
                <label>Password: </label>
                <input placeholder="********" type="password" />
                <br />
                <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border:"none" }}>Log in</button>
                <Link href={'/signup'} className="text-center text-primary text-decoration-none">Don't have an accout? Create here</Link>
            </form>
        </div>
    )
}       