import React, { useState } from "react";
import {Link} from "react-router-dom"
const UserLogin=()=>{

    const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');

        const [userData,setUserData]=useState({});


    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        });

        console.log(userData);

        setEmail('');
        setPassword('');
    }
    return(
        <div className="p-7 h-screen flex flex-col justify-between"> 


            <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6duCBplcm_cWxwiHyXklPvmYWjeQKpgUnGMqJ6XNCFmNoTy0jYTCCxGg&s" alt="" />
            <form onSubmit={submitHandler}>
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

            <h3 className="text-lg font-medium mb-2">Enter password</h3>
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password" required placeholder="password"/>

            <button
             className="bg-[#111]  text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >Login</button>

            <p className="text-center">New Here?  <Link to="/signup" className="text-blue-600">Create new Account</Link></p>
           
            </form>
          
            </div>
            <div>
                <Link 
                to="/captain-login"
                className="bg-[#10b461] flex items-center justofy-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin;