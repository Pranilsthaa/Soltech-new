import './otp.scss'
import stLogo from '/images/ST_.png';
import bgIMG from '/images/bgOTP.png'
import { IoChevronBackOutline } from "react-icons/io5";

function OtpVer() {
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
                        <form>  
                            <h1>Verify code</h1>
                            <p>An authentication code has been sent to your email.</p>
                        <div className="input-group">
                            <input
                            type="text"
                            id="email"
                            // {...register("first_name", { required: true })}
                            required
                            />
                            <label htmlFor="email">Enter Code</label>
                        </div>
                        <button>Verify</button>
                        <span className='resend'>Didn’t receive a code? <a href="" className='text-red-600'>Resend</a> </span>
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

export default OtpVer;

