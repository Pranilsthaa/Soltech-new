import React, {useState} from 'react'
import './createDiscount.scss'

const cardData = [
  {
    id: 1,
    name: 'Fixed Discount',
  },
  {
    id: 2,
    name: 'Percentage Discount',
  },
  {
    id: 3,
    name: 'Free Shipping',
  },
  {
    id: 4,
    name: 'Price Discount',
  },
]


function CreateDiscount() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  React.useEffect(()=>{
    function handleResize(){
      setScreenHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [screenHeight])
  
  
  return (
    <div className='createDiscount' style={{'--screen-height': `${screenHeight}px`}}>
      <div className="hero">
        <form>
            <div className="dis-info">
                <h1>Discount Information</h1>
                <p>Code will be used by user in checkout</p>
                <div className="input">
                    <div className="input-con">
                        <label htmlFor="dis-code">Discount Code</label>
                        <input type="text" id="dis-code" placeholder='Shipfree20' />
                    </div>
                    <div className="input-con">
                        <label htmlFor="dis-name">Discount Name</label>
                        <input type="text" id="dis-name" placeholder='Free Shipping'/>
                    </div>
                  </div>
            </div>
            <div className="dis-type">
              <h1>Discount Type</h1>
              <p>Type of Discount you want to create</p>
                <div className="card-con">
                  {
                    cardData.map((item)=>{
                      return (
                        <div key={item.id} className="card">
                          <h2>{item.name}</h2>
                        </div>
                      )
                    })
                  }
                  </div>
                  <div className="main-input-con">
                      <div className="input-con">
                        <label htmlFor="dis-value">Discount Value</label>
                        <input type="text" id="dis-value" placeholder='Amount'/>
                      </div>
                      <div className="input-con">
                          <label htmlFor="dis-apply">Applies to</label>
                          <select>
                            <option hidden>Choose</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                      </div>
                      <div className="input-con">
                          <label htmlFor="dis-duration">Duration</label>
                          <input type="date" id="dis-duration" placeholder='Set Duration'/>
                          <div className="checkbox">
                            <input type="checkbox"/> <span>Don’t set duration</span>
                          </div>
                      </div>
                      <div className="input-con">
                          <label htmlFor="dis-limit">Usage Limit</label>
                          <input type="text" id="dis-limit" placeholder='Amount of uses'/>
                          <div className="checkbox">
                            <input type="checkbox"/> <span>Don’t limit amount of uses</span>
                          </div>
                      </div>
                </div>
            </div>
            <div className="btn-grp">
              <button type="button" className='cancel-btn'>Cancel</button>
              <button className='submit-btn'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateDiscount
