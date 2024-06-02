/* eslint-disable react/prop-types */
import './index.scss'

function StoreUserCard({data, handleChange}) {
    const {name, img, status, orders, balance, userID} = data;
    return (
    <div className="user-card-container">

        <section className="main">
            <input type="checkbox" value={userID} onChange={(e)=>handleChange(e, userID)} />
            <img src={img} alt="" loading='lazy'/>
            <h1>{name}</h1>
            <h2 className={status==='Blocked' ? 'block' : ''}>{status}</h2>
        </section>
        
        <section className="footer">
            <div className="col">
                <h3>Orders</h3>
                <span>{orders}</span>
            </div>
            <div className="col">
                <h3>Balance</h3>
                <span>Rs. {balance}</span>
            </div>
        </section>
    </div>
  )
}

export default StoreUserCard
