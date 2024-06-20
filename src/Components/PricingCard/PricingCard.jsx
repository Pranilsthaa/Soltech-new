/* eslint-disable react/prop-types */
import { WiStars } from "react-icons/wi";


function PricingCard({data}) {
  const {title, bestFor, price, features, popular, custom} = data

  return (
    <div style={{boxShadow: '3px 7px 4px rgba(0, 0, 0, 0.25)'}} className={`flex flex-col ${popular ? 'border border-[#2563EB] border-2 rounded-br-3xl  rounded-bl-3xl rounded-tr-sm  rounded-tl-sm' : 'rounded-3xl'} relative pricing-con bg-white py-4 px-4 min-w-[272px] min-h-[445px]`}>
       {
        popular &&  
        <div style={{border: '2px solid #2563EB', boxSizing: "border-box"}} className="popular-con flex items-center justify-center  absolute -top-[30px] -left-[2px]  bg-[#2563EB] rounded-tr-full rounded-tl-full min-w-[101.9%] h-[34px]">
            {popular && <span className="popular text-white flex items-center gap-[2px]">Most Popular <WiStars size={30}/></span>}
          </div>
       } 
        <div className="header flex flex-col mb-8">
            <h3 className="font-bold text-[18px]">{title}</h3>
            <h4 className="text-[13px]">{bestFor}</h4>
            <h5 className="my-[16px]"><span style={{fontSize: '25px', fontWeight: 'bold'}}>{price}</span><span className="text-[12px] text-[#18181B]">{custom ? '' : '/month'}</span></h5>
            <a href="#" className={` ${custom ? 'text-[#1D4ED8] font-bold border border-[#2563EB] border-[2px]' : 'bg-blue-600'} flex text-white items-center justify-center rounded py-2`}>Get started</a>
        </div>
        <div className="main">
            <p className="font-bold mb-[8px]">What you get:</p>
            <ul  className="flex flex-col gap-[10px]">
                {
                  features.map((item, index) => {
                    return(
                      <li key={index}>
                          <span className="text-blue-600 mr-3"> ✓</span> <span className="text-[14px]">{item} </span>
                      </li>
                    )
                })
              }
            </ul>
            
        </div>
    </div>
  )
}

export default PricingCard
