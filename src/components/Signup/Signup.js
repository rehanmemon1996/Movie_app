import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";




const Signup = () => {
    let navigate=useNavigate()
    
let [confrim,setconfrom]=useState('');
let [user, setuser] = useState({
  name: "",
  email: "",
  password: "",
  image:""

})
const handleChange = (e) => {
  console.log(e.target.name)
  setuser({ ...user, [e.target.name]: e.target.value })


}
   
    let Submit=async ()=>{
        // console.log(confrim)
        if(user.password===confrim){
       await createUserWithEmailAndPassword(auth, user.email,user.password)
            .then((userCredential) => {
                // Signed in 
               alert("register")
               setuser({
                name: "",
                email: "",
                password: "",
                image:""
              
              })
              setconfrom("")
              navigate('/login')

                // ...
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });}else{
                alert("password is not match")
            }

    }
    return (
        <>
            <div className='w-[30%] m-[10%] font-mono mx-auto border border-2 rounded-lg'>
        <h1 className='font-mono text-[2rem] mx-[40%] w-[100%]'>
          Sign Up
        </h1>
        <input type='text' name='name' required onChange={handleChange} value={user.name} className='w-[90%] p-2 my-6 h-10 rounded-sm border text-black border-gray-300 mx-auto block' placeholder='Name' />
        <input type='email' name='email' required onChange={handleChange} value={user.email} className='w-[90%] p-2 my-6 h-10 rounded-sm border text-black border-gray-300 mx-auto block' placeholder='Email Address' />
        <input type='password' name='password' required onChange={handleChange} value={user.password} className='w-[90%] p-2 my-6 h-10 rounded-sm text-black border border-gray-300 mx-auto block' placeholder='Password' />
        <input type='password' name='password' onChange={(e)=>setconfrom(e.target.value)} value={confrim} className='w-[90%] p-2 my-6 h-10 rounded-sm border text-black border-gray-300 mx-auto block' placeholder='confrim Password' />
        {/* <h1 className='text-blue-400 mx-[4%] mb-5'>Forget Password</h1> */}
        <div className='flex w-[100%]'>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] text-white rounded-[10px] bg-black'>
            <Link to={'/login'}>Login</Link>
          </button>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mr-[4%] w-[90%] text-white rounded-[10px] bg-red-600' onClick={Submit}>Sign Up</button>

        </div>
            </div>
            {/* <button style={{ width: 200 }} onClick={handleSignup}>signup</button> */}
        </>
    )
}
export default Signup;


