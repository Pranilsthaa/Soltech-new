import Toggle from '../../../Components/Toggle/Toggle';
import './home.scss'
import globeICON from '/images/global-edit1.png'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import profilePic from "/images/pp.jpg"
import earningICON from '/images/figma-icons/Icon.png'
import salesICON from '/images/figma-icons/status-up.png'
import {Calendar} from '@/Components/ui/calendar'
import React from 'react';
import Barchart from '@/Components/Charts/BarChart';
import { IoCaretUpSharp } from "react-icons/io5";
import Linechart from '@/Components/Charts/LineChart';

function Home() {
  const initiallySelectedDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState(initiallySelectedDate);
  const [search, setSearch] = React.useState('');

  return (
    <div className='homepage-container'>
      <div className="header">
        <h1>Dashboard</h1>
        <div className="util-con">
          <img src={globeICON} alt="" className='globe-img' />
            <div className="search">
                <div className="input-box">
                    <CiSearch color='#2B3674' />
                    <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className="cursor-pointer ">
                <FaRegBell />
                </div>

                <Toggle />

                <a href="">
                  <img src={profilePic} alt="" />
                </a>
            </div>
        </div>
      </div>
      <div className="hero">
          <div className="row1">
              <div className="card">
                <div className="icon">
                  <img src={earningICON} alt="" />
                </div>
                <div className="info">
                <h1>Earnings</h1>
                <span>रु 574.34</span>
              </div>
              </div>
              <div className="card">
                <div className="icon">
                  <TbCurrencyRupeeNepalese size={46} color='#4318ff' />
                </div>
                <div className="info">
                <h1>Spent This Month</h1>
                <span>रु 574.34</span>
              </div>
              </div>
              <div className="card">
                <div className="icon">
                  <TbTruckDelivery size={46} color='#4318ff'/>
                </div>
                <div className="info">
                <h1>Delivery</h1>
                <span>रु 574.34</span>
              </div>
              </div>
              <div className="card">
                <div className="icon">
                  <img src={salesICON} alt="" />
                </div>
                <div className="info">
                <h1>Sales</h1>
                <span>रु 574.34</span>
                <p><span id='span'>+13%</span> since last month</p>
              </div>
              </div>
          </div>
          <div className="row2">
            <div className="card1">
              <div className="content">
                <section>
                  <h1>Daily Traffic</h1>
                  <p><span>7890</span> Visitors</p> 
                </section>
                <h2> <IoCaretUpSharp /> +2.45%</h2>
              </div>
              <Barchart />
            </div>
            <div className="card1">
                <Calendar  
                        mode="range"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="text-custom relative top-2 z-50"
                        showOutsideDays={false}
                    />
            </div>
            <div className="card1 relative">
                  <h1 className='-mb-6 top-2 font-bold absolute left-10'>Weekly Revenue</h1>
                  <div id="chart" className=''>
                    <Linechart />
                  </div>
            </div>
          </div>
          {/* <div className="row3"></div> */}
      </div>
    </div>
  )
}

export default Home;
