import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <div className="landing-con" style={{position: 'relative', top: '100px'}}>
          <Outlet />
      </div>
    </div>
  )
}
export default LandingLayout
