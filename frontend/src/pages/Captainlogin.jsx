import React,{useState} from "react";
import {Link} from "react-router-dom";

const Captainlogin=()=>{

    
        const [email,setEmail]=useState('');
            const [password,setPassword]=useState('');
    
            const [captainData,setCaptainData]=useState({});
    
    
        const submitHandler=(e)=>{
            e.preventDefault();
            setCaptainData({
                email:email,
                password:password
            });
    
            console.log(captainData);
    
            setEmail('');
            setPassword('');
        }
    return(
        <div className="p-7 h-screen flex flex-col justify-between"> 


        <div>
        <img className='w-20 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6duCBplcm_cWxwiHyXklPvmYWjeQKpgUnGMqJ6XNCFmNoTy0jYTCCxGg&s" alt="" />
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

        <p className="text-center">Join a fleet  <Link to="/captain-signup" className="text-blue-600">Register as a Captaint</Link></p>
       
        </form>
      
        </div>
        <div>
            <Link 
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Sign in as User</Link>
        </div>
    </div>
    )
}

export default Captainlogin;