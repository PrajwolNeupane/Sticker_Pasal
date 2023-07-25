"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogOutButton(){

    const router = useRouter();

    const logOut = async() => {
        try{
            const response = await axios.get("http://localhost:3000/api/user/logout");
            router.push("/")
        }catch(e){
            console.log(e);
        }
    }

    return (
        <h2 className="fs-5 fw-normal navbar-brand text-dark" style={{cursor:"pointer"}} onClick={()=>{logOut()}}>Log Out
        </h2>
    )
}