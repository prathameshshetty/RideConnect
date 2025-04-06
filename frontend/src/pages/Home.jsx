import React from "react";
import {Link} from "react-router-dom"
const Home=()=>{
    return(
        <div>
          <div className="bg-cover bg-[url(https://media.istockphoto.com/id/869995028/photo/traffic-stop-signal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q17ZMfCdon-VSZ1Uo8ENCbTmu54RnCmmGpvak_GAyck=)] h-screen flex justify-end flex-col w-full bg-red-400">
          <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="bg-white py-4 px-4 pb-7">
                <h2 className="text-3xl font-bold">Get started with RideConnect</h2>
                <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
          </div>
        </div>
    )
}

export default Home;