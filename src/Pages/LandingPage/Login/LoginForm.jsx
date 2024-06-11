import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './login.scss';
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import logo from '/images/ST_.png';
import secureLoginImage from '/images/secure-login-image.png';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [arrowAnimation, setArrowAnimation] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setArrowAnimation(true);
    navigate('/dashboard')
    setTimeout(() => {
      setArrowAnimation(false);
    }, 1000);
  };

  return (
    <section id='loginPage'>
      <div className="main-container">
        <div className="form-container">
          <div className="header">
            <img src={logo} alt="solarius logo" />
            <span>SOLTECH</span>
          </div>
          <div className="form-header">
            <h1>Login</h1>
            <p>Login to access your account</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  required
                />
                <label htmlFor="email">Email</label>
                {errors.email && <span className="error">Email is required</span>}
              </div>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", { required: true })}
                  required
                />
                <label htmlFor="password">Password</label>
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                </span>
                {errors.password && <span className="error">Password is required</span>}
              </div>
              <div className="checkbox">
                <input type="checkbox" id="remember" {...register("remember")} />
                <label htmlFor="remember">Remember me</label>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className={arrowAnimation ? "animate" : ""}>
                Login
                <span className="arrow"></span>
              </button>
              <div className="footer">
                <span>Don’t have an account? <Link to="/signup" className='text-red-500 font-medium'>Sign up</Link></span>
              </div>
              <div className="hor-line mt-3" />
              <div className="login-services flex gap-2 justify-center mt-4">
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><MdOutlineFacebook size={25} color='blue' /></a>
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><FcGoogle size={25} /></a>
                <a href="" className='py-2.5 px-16 border-blue-400 border rounded-md'><FaApple size={25} /></a>
              </div>
            </form>
          </div>
        </div>
        <div className="img-container">
          <img src={secureLoginImage} alt="background image" />
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
