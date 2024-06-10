/* eslint-disable react/prop-types */
import React from 'react';
import './index.scss'
import { VscKebabVertical } from "react-icons/vsc";


function StoreUserCard({data, handleChange}) {

    const dropdownRef = React.useRef()

    const {name, img, status, orders, balance, userID} = data;
    const [isClicked, setIsClicked] = React.useState(false)

    React.useEffect(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsClicked(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })
    return (
    <div className="user-card-container">

        <section className="main">
            <input type="checkbox" value={userID} onChange={(e)=>handleChange(e, userID)} />
            <section className='drop'>
                <div className="dropdown-container" ref={dropdownRef}>
                <VscKebabVertical onClick={()=> setIsClicked(!isClicked)}/>
                {
                    isClicked && 
                    <div className={isClicked ? 'dropdown-content-on' : null}>
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                }
                </div>
            </section>
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
