// import { NavLink } from 'react-router-dom'
import Toggle from '../Toggle/Toggle'
import stLogo from '/images/ST_.png'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
      <nav>
        <div className="logo">
            <Link to="/">
              <img src={stLogo} alt="solarius logo" />
              <subtitle>SOLTECH</subtitle>
            </Link>
        </div>
        <div className="links">
          <div className="link">
              <ul>
                {/* <li><NavLink to="/">About us</NavLink></li>
                <li><NavLink to="/">Features</NavLink></li>
                <li><NavLink to="/">FAQ’s</NavLink></li>
                <li><NavLink to="/">Pricing</NavLink></li> */}
                <li><a href="">About us</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">FAQ’s</a></li>
                <li><a href="">Pricing</a></li>
              </ul>
             </div>
                <div className="toggle">
                    <Toggle />
                    <Link to="/login">Login</Link>
                    <Link to="/signup" className='get-started-btn'>Get Started</Link>
                </div>      
        </div>
       
      </nav>
    </div>
  )
}

export default Navbar
