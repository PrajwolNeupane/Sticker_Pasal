"use client"

import Link from "next/link"
import { useState } from "react";
import { SignUpDataType } from "../const/interface";
import axios from "axios";


export default function Page() {

    const [signUpData,setSignUpData] = useState<SignUpDataType>({name:"",password:"",email:"",phonenumber:""});

    const signUp = async () => {
        console.log({...signUpData})
        try{
            const response = await axios.post("http://localhost:3000/api/user/signup",{...signUpData});
            console.log(response.data);
            alert('hi');
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className="d-flex w-100 bg-body-secondary align-items-center justify-content-center" style={{ height: "100vh" }}>
            <form className="d-flex flex-column bg-dark-subtle p-3" style={{ width: "33%" }} 
            onSubmit={(e)=>{
                e.preventDefault();
                signUp();
            }}
            >
                <h2 className="text-dark" style={{ fontWeight: "700",fontSize:"40px" }}>Create a Account</h2>
                <br />
                <label>Name: </label>
                <input placeholder="Joe Doe" name="name" type="text" onChange={(e)=>{setSignUpData({[e.target.name]:e.target.value,...signUpData})}}/>
                <label>Email: </label>
                <input placeholder="joedoe@gmail.com" name="email" type="email" onChange={(e)=>{setSignUpData({[e.target.name]:e.target.value,...signUpData})}}/>
                <label>Phone Number: </label>
                <input placeholder="1234567890" name="phonenumber" type="text" onChange={(e)=>{setSignUpData({[e.target.name]:e.target.value,...signUpData})}}/>
                <label>Password: </label>
                <input placeholder="********" name="password" type="password" onChange={(e)=>{setSignUpData({[e.target.name]:e.target.value,...signUpData})}}/>
                <br />
                <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{ fontWeight: "400", border: "none" }} type="submit" >Create</button>
                <Link href={'/login'} className="text-center text-primary text-decoration-none">Already have an accout? Log in</Link>
            </form>
        </div>
    )
}       