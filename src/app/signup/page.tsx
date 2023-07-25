"use client"

import Link from "next/link"

export default function Page() {
    return (
        <div className="d-flex w-100 bg-body-secondary align-items-center justify-content-center" style={{ height: "100vh" }}>
            <form className="d-flex flex-column bg-dark-subtle p-3" style={{ width: "33%" }}>
                <h2 className="text-dark" style={{ fontWeight: "700",fontSize:"40px" }}>Create a Account</h2>
                <br />
                <label>Name: </label>
                <input placeholder="Joe Doe" type="text" />
                <label>Email: </label>
                <input placeholder="joedoe@gmail.com" type="email" />
                <label>Phone Number: </label>
                <input placeholder="1234567890" type="email" />
                <label>Password: </label>
                <input placeholder="********" type="password" />
                <br />
                <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border: "none" }}>Create</button>
                <Link href={'/login'} className="text-center text-primary text-decoration-none">Already have an accout? Log in</Link>
            </form>
        </div>
    )
}       