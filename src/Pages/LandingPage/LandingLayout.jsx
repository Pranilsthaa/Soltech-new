import Navbar from '../../Components/Navbar/Navbar'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import EmailVer from './ForgotPass/EmailVer'
import OtpVer from './ForgotPass/OtpVer'
import SetPass from './ForgotPass/SetPass'
import LoginForm from './Login/LoginForm'

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Signup />
      <EmailVer />
      <OtpVer />
      <SetPass />
      <LoginForm />
    </div>
  )
}

export default LandingLayout
