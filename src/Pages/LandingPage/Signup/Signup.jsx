import { useForm } from 'react-hook-form';
import './signup.scss';
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import React from 'react';

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const[showPassword, setShowPassword] = React.useState(false)
    const[showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const password = watch("password")

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

  return (
    <section id='signupPage'>
      <div className="main-container">
        <div className="img-container"></div>
        <div className="form-container">
          <h1>Sign up</h1>
          <p>Let’s get you all set up so you can access your personal account.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="row1">
              <div className="input-group">
                <input
                  type="text"
                  id="first_name"
                  {...register("first_name", { required: true })}
                  required
                />
                <label htmlFor="first_name">First Name</label>
                {errors.first_name && <span className="error">First name is required</span>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  id="last_name"
                  required
                  {...register("last_name", { required: true })}
                />
                <label htmlFor="last_name">Last Name</label>
                {errors.last_name && <span className="error">Last name is required</span>}
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  required
                  {...register("email", { required: true })}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <span className="error">Email is required</span>}
              </div>
              <div className="input-group">
                <input
                  type="number"
                  id="phone_number"
                  required
                  {...register("phone", { required: true })}
                />
                <label htmlFor="phone_number">Phone Number</label>
                {errors.phone && <span className="error">Phone number is required</span>}
              </div>
            </section>
            <section className="row2">
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  {...register("password", { required: true, minLength: 8 })}
                />
                <label htmlFor="password">Password</label>
               <span onClick={()=> setShowPassword(!showPassword)}> {showPassword ? <IoEye size={20}/> : <IoEyeOff size={20}/>} </span>
              </div>
                {errors.password && <span className="text-red-600 -mt-4">Min 8 Characters Required</span>}
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm_password"
                  required
                  {...register("confirm_password", { required: true, validate: value => value === password || "Passwords do not match"})}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
              <span onClick={()=> setShowConfirmPassword(!showConfirmPassword)}> {showConfirmPassword ? <IoEye size={20}/> : <IoEyeOff size={20}/>} </span>
              </div>
                {errors.confirm_password && <span className='text-red-600 -mt-4'>{errors.confirm_password.message}</span>}
               <div className="checkbox flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", { required: true })}
                />
                <label htmlFor="terms">I agree to all the <a href='#' className='text-red-400 font-medium'>Terms</a> and <a href='#' className='text-red-400  font-medium'>Privacy Policies</a></label>
                </div>
                {errors.terms && <span className='text-red-600 -mt-4'>Please Accept To Continue</span>}
                <button>Create Account</button>
                <section className='footer flex flex-col items-center'>
                    <span>Already have an account? <a href="#" className='text-red-500 font-medium'>Login</a></span>
                </section>
            <div className="hor-line mt-3" />
            <div className="login-services flex gap-2 justify-center mt-4">
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><MdOutlineFacebook size={25} color='blue'/></a>
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><FcGoogle size={25} /></a>
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><FaApple size={25} /></a>
            </div>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
