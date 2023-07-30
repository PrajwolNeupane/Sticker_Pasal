"use client"

import Link from "next/link"
import { useState } from "react";
import { LogInDataType } from "../const/interface";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {

    const router = useRouter();
    const [logInData, setLogInData] = useState<LogInDataType>({ email: "", password: "" });

    const logIn = async () => {
        try {
            const reponse = await axios.post("http://localhost:3000/api/user/login", { ...logInData });
            router.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="d-flex w-100 bg-body-secondary align-items-center justify-content-center" style={{ height: "100vh" }}>
            <form className="d-flex flex-column bg-dark-subtle p-3" style={{ width: "33%" }}
                onClick={(e) => {
                    e.preventDefault();
                    logIn();
                }}>
                <h2 className="text-dark" style={{ fontWeight: "700", fontSize: "40px" }}>Log In </h2>
                <br />
                <label>Email: </label>
                <input placeholder="joedoe@gmail.com" type="email" name="email" onChange={(e)=>{
                    setLogInData({...logInData,[e.target.name] : e.target.value});
                }} />
                <label>Password: </label>
                <input placeholder="********" type="password" name="password" onChange={(e)=>{
                    setLogInData({...logInData,[e.target.name] : e.target.value});
                }}/>
                <br />
                <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border: "none" }} type="submit">Log in</button>
                <Link href={'/signup'} className="text-center text-primary text-decoration-none">Don&apos;t have an accout? Create here</Link>
            </form>
        </div>
    )
}       