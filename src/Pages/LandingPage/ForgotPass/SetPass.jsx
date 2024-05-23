import React from 'react';
import './otp.scss'
import stLogo from '/images/ST_.png';
import bgIMG from '/images/bgOTP.png'
import { IoChevronBackOutline, IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from 'react-hook-form';

function SetPass() {
    const[showPassword, setShowPassword] = React.useState(false)
    const[showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };
    return (
    <div className='otp-ver'>
        <div className="hero">
            <div className="main-container">
                <div className="form-container">
                    <div className="header">
                        <img src={stLogo} alt="solarius logo" />
                        <span>SOLTECH</span>
                    </div>
                    <div className="form-content">
                        <a href="">
                            <IoChevronBackOutline /> Back to Login 
                        </a>
                        <form onSubmit={handleSubmit(onSubmit)}>  
                            <h1>Set a Password</h1>
                            <p>Your previous password has been reseted. Please set a new password for your account.</p>
                        <div className="input-group">
                            <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            {...register("password", { required: true })}
                            required
                            />
                            <label htmlFor="password">Create Password</label>
                            <span onClick={()=> setShowPassword(!showPassword)}> {showPassword ? <IoEye size={20}/> : <IoEyeOff size={20}/>} </span>
                        </div>
                        <div className="input-group">
                            <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirm_password"
                            name="confirm_password"
                            {...register("confirm_password", { required: true, validate: value => value === password || "Password do not match"})}
                            required
                            />
                            <label htmlFor="confirm_password">Re-Enter Password</label>
                            <span onClick={()=> setShowConfirmPassword(!showConfirmPassword)}> {showConfirmPassword ? <IoEye size={20}/> : <IoEyeOff size={20}/>} </span>
                        </div>
                        {errors.confirm_password && <span className="text-red-600">{errors.confirm_password.message}</span>}
                        <span className='resend'>Didn’t receive a code? <a href="" className='text-red-600'>Resend</a> </span>
                        <button>Verify</button>
                        </form>
                    </div>
                    
                </div>
                <div className="img-container">
                    <img src={bgIMG} alt="random image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetPass;

