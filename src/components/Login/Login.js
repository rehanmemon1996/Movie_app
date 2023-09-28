import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; 




const Login = () => {
    const navigate=useNavigate()
let [user, setuser] = useState({
  email: "",
  password: "",

})
const handleChange = (e) => {
  console.log(e.target.name)
  setuser({ ...user, [e.target.name]: e.target.value })


}
localStorage.setItem("islogin",false)
    let Submit=async ()=>{
     
          await  signInWithEmailAndPassword(auth, user.email,user.password)
            .then((userCredential) => {
               alert("Login Succesfully")
               setuser({
                email: "",
                password: "",
              
              })
              localStorage.setItem("islogin",true)
              navigate("/home")
              

                // ...
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });

           


    }
    return (
        <>
            <div className='w-[30%] m-[10%] font-mono mx-auto border border-2 rounded-lg'>
        <h1 className='font-mono text-[2rem] mx-[40%] w-[100%]'>
       Login
        </h1>
        <input type='email' name='email' required onChange={handleChange} value={user.email} className='w-[90%] p-2 my-6 h-10 rounded-sm border text-black border-gray-300 mx-auto block' placeholder='Email Address' />
        <input type='password' name='password' required onChange={handleChange} value={user.password} className='w-[90%] p-2 my-6 h-10 rounded-sm text-black border border-gray-300 mx-auto block' placeholder='Password' />
        {/* <h1 className='text-blue-400 mx-[4%] mb-5'>Forget Password</h1> */}
        <div className='flex w-[100%]'>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mx-[4%] w-[90%] text-white rounded-[10px] bg-black' onClick={Submit}>
            Login
          </button>
          <button className=' rounded-sm  text-[1.2rem] p-2 mb-4 mr-[4%] w-[90%] text-white rounded-[10px] bg-red-600' ><Link to={'/'}>Sign Up</Link></button>

        </div>
            </div>
            {/* <button style={{ width: 200 }} onClick={handleSignup}>signup</button> */}
        </>
    )
}
export default Login;


