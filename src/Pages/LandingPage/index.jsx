import Navbar from '../../Components/Navbar/Navbar'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import EmailVer from './ForgotPass/EmailVer'
import OtpVer from './ForgotPass/OtpVer'
import SetPass from './ForgotPass/SetPass'

function Index() {
  return (
    <div>
      <Navbar />
      <Home />
      <Signup />
      <EmailVer />
      <OtpVer />
      <SetPass />
    </div>
  )
}

export default Index
