import React, { useState } from "react";
import {Link} from "react-router-dom"
const UserSignup=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userData,setUserData]=useState("");


    const submitHandler=(e)=>{
        e.preventDefault();

        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password,


        });
        console.log(userData);
        console.log("Hi")
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");

    }
    return(
        <div className="p-7 h-screen flex flex-col justify-between"> 


            <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6duCBplcm_cWxwiHyXklPvmYWjeQKpgUnGMqJ6XNCFmNoTy0jYTCCxGg&s" alt="" />
            <form onSubmit={(e)=>submitHandler(e)}>


            <h3 className="text-lg font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-5">
            <input 
            type="text"
             required 
             value={firstName}
             onChange={(e)=>{
                setFirstName(e.target.value)
             }}
             placeholder="Firstname" 
             className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
             />

            <input 
            type="text"
             required 
             value={lastName}
             onChange={(e)=>{
                setLastName(e.target.value)
             }}
             placeholder="Lastname" 
             className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
             />
            </div>


            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input 
            type="email"
             required 
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             placeholder="email@example.com" 
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
             />

            

            <h3 className="text-base font-medium mb-2">Enter password</h3>
            <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
             className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password" required placeholder="password"/>

            <button
             className="bg-[#111]  text-white font-semibold mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >Login</button>

            <p className="text-center">Already have a account?  <Link to="/login" className="text-blue-600">Loginhere</Link></p>
           
            </form>
          
            </div>
            <div>
               
               <p className="text-[10px] leading-tight">This site is protected by reCAPTCH and the <span className="underline">google Privacy Policy</span>  and <span className="underline">Terms of Service apply</span> .</p>
            </div>
        </div>
    )
}

export default UserSignup;