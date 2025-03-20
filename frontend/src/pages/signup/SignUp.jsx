import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })



  function handleChange(e){
    let {name , value} = e.target;
    setInputs({...inputs,[name]:value})
  }

  const {loading,signup} = useSignup()


async function  handleSubmit (e){
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-400">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-400 label-text ">Full Name</span>
            </label>
            <input
            name="fullname"
            value={inputs.fullname}
            onChange={handleChange}
              type="text"
              placeholder="John doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-400 label-text ">Username</span>
            </label>
            <input
            name="username"
            value={inputs.username}
            onChange={handleChange}
              type="text"
              placeholder="Johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-400 ">Password</span>
            </label>
            <input type="password" name="password" value={inputs.password} onChange={handleChange} placeholder="Enter Password" className="w-full input input-bordered h-10" />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-400 ">Confirm Password</span>
            </label>
            <input value={inputs.confirmPassword} name="confirmPassword" onChange={handleChange} type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 mb-5" />
          </div>

          <GenderCheckBox gender={inputs.gender} onChange={handleChange}  />

          <Link to={'/login'} className="text-sm hover:underline text-gray-400 hover:text-blue-600 mt-4 inline-block">Already have an account?</Link>

          <div>
            <button onClick={handleSubmit} disabled={loading} className="btn btn-block btn-sm  mt-2 border border-slate-700">
              {loading  ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
