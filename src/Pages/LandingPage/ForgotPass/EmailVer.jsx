import { MdOutlineFacebook } from 'react-icons/md';
import './forgotpass.scss'
import stLogo from '/images/ST_.png';
import fpImg from '/images/forgotPassImg.png'
import { IoChevronBackOutline } from "react-icons/io5";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function EmailVer() {
  return (
    <div className='email-ver'>
        <div className="hero">
            <div className="main-container">
                <div className="form-container">
                    <div className="header">
                        <img src={stLogo} alt="solarius logo" />
                        <span>SOLTECH</span>
                    </div>
                    <div className="form-content">
                        <Link to="/login">
                            <IoChevronBackOutline /> Back to Login 
                        </Link>
                        <form>  
                            <h1>Forgot Password?</h1>
                            <p>Don’t worry, happens to all of us. Enter your email below to recover your password.</p>
                        <div className="input-group">
                            <input
                            type="text"
                            id="email"
                            // {...register("first_name", { required: true })}
                            required
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <button>Submit</button>
                        </form>
                        <div className="hor-line mt-3" />
                        <div className="login-services flex gap-2 justify-center mt-4">
                            <a href="" className='py-2 px-10 border-blue-400 border rounded-md'><MdOutlineFacebook size={25} color='blue'/></a>
                            <a href="" className='py-2 px-10 border-blue-400 border rounded-md'><FcGoogle size={25} /></a>
                            <a href="" className='py-2 px-10 border-blue-400 border rounded-md'><FaApple size={25} /></a>
                        </div>
                    </div>
                    
                </div>
                <div className="img-container">
                    <img src={fpImg} alt="random image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmailVer;

