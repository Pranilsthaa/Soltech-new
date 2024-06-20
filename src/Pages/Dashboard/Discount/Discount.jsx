import { useState, useEffect } from 'react'
import './discount.scss'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import discountLOGO from "../../../../public/images/discount.png"

function Discount() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)

    useEffect(()=> {
        function handleResize() {
            setScreenHeight(window.innerHeight)
        }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    }, [screenHeight])

    console.log(screenHeight)
  return (
    <div className="discountPage" style={{'--screen-height': `${screenHeight}px`}}>
           <div className="header">
                <h1>Discounts</h1>
                <Link to={'/add-discount'}><FaPlus /> Create Discount</Link>
           </div> 
        <div className="hero">
            <img src={discountLOGO} alt="discount coupon logo" />
            <div className="text">
                <h1>Manage discounts and promotions</h1>
                <p>Craft discounts to boost sales, balancing profitability. Execute promotions to engage customers & your business. </p>
            </div>
            <div className="add-btn">
            <Link to={'/create-discount'}><FaPlus /> Create Discount</Link>
            </div>
        </div>
    </div>
  )
}

export default Discount
