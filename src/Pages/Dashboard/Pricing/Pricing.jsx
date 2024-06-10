import PricingCard from '@/Components/PricingCard/PricingCard'
import './pricing.scss'
import pricingData from './PricingData'
import React from 'react'

function Pricing() {
  const [activeBtn,  setActiveBtn] = React.useState('all')
 function handleButtonClick(status){
    setActiveBtn(status)
  }

  return (
    <div className='pricing-page'>
            <div className="hero">
               <div className="top"> 
                    <span>Pricing</span>
                  <h1> Streamline your Work. Start free. </h1> 
                  <h2>Choose the perfect plan for your business needs</h2>
                </div>
                <div className="middle">
                  <h1><span>Save 70%</span> on Tri-annual plan!</h1>
                    <div className="btn-group">
                      <button className={activeBtn === 'all' ? 'active' : ''} onClick={()=>handleButtonClick('all')}>Month</button>
                      <button className={activeBtn === 'active' ? 'active' : ''} onClick={()=>handleButtonClick('active')}>Annual</button>
                      <button className={activeBtn === 'blocked' ? 'active' : ''} onClick={()=>handleButtonClick('blocked')}>Tri-Annual</button>
                    </div>
                </div>
                <div className="card-con">
                  {
                    pricingData.map((item)=>{
                      return(
                        <PricingCard key={item.id} data={item} />
                      )
                    })
                    
                  }
                </div>

            </div>
    </div>
  )
}

export default Pricing
