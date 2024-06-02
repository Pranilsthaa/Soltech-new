import './sidebar.scss'
import stLOGO from '/images/ST_.png'
import productICON from '/images/productICON_up1.svg'
import categoryICON from '/images/categoryICON_up.png'
import stockICON from '/images/stockICON_up.svg'
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { TbTicket } from "react-icons/tb";
import { NavLink } from 'react-router-dom'
import PremiumCard from '../PremiumCard/PremiumCard'
// import productClicked from '../../../public/images/product_clicked.png'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <aside>
        <div className="header">
          <img src={stLOGO} alt="solarius technology logo" />
        <h1>SOLTECH</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/" className={(e)=> e.isActive ? 'active' : ''}>
              <IoMdHome />Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/storeusers" className={(e)=> e.isActive ? 'active' : ''}>
              <FaUserAlt />Store Users
            </NavLink>
          </li>
          <li>
            <a href="#">
             {/* <img src={productICON} alt="" />  */}
             <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.56641 8.37L13.5001 14.1187L23.3664 8.40371" stroke="#A3AED0" stroke-width="1.47812" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 24.3112V14.1075" stroke="#A3AED0" stroke-width="1.47812" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1714 2.79L5.16394 6.13129C3.80269 6.88504 2.68896 8.77501 2.68896 10.3275V16.6838C2.68896 18.2363 3.80269 20.1263 5.16394 20.88L11.1714 24.2213C12.4539 24.9301 14.5577 24.9301 15.8402 24.2213L21.8477 20.88C23.209 20.1263 24.3227 18.2363 24.3227 16.6838V10.3275C24.3227 8.77501 23.209 6.88504 21.8477 6.13129L15.8402 2.79C14.5464 2.07 12.4539 2.07 11.1714 2.79Z" stroke="#A3AED0" stroke-width="1.47812" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.125 14.895V10.7775L8.44873 4.61246" stroke="#A3AED0" stroke-width="1.47812" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             Products
            </a>
          </li>
          <li>
            <a href="#">
             <img src={categoryICON} alt="" /> Categories
            </a>
          </li>
          <li>
            <a href="#">
             <TbTicket /> Discounts
            </a>
          </li>
          <li>
            <a href="#">
             <img src={stockICON} alt="" /> Stock
            </a>
          </li>
          {/* <li><NavLink to="" className={(e)=> e.isActive ? 'active' : ''}>Products</NavLink></li>
          <li><NavLink to="" className={(e)=> e.isActive ? 'active' : ''}>Categories</NavLink></li>
          <li><NavLink to="" className={(e)=> e.isActive ? 'active' : ''}>Discounts</NavLink></li>
          <li><NavLink to="" className={(e)=> e.isActive ? 'active' : ''}>Stock</NavLink></li> */}
        </ul>
        <PremiumCard />
      </aside>
    </div>
  )
}

export default Sidebar;

