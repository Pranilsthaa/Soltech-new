import React, {Suspense, lazy} from 'react';
import { CiSearch } from 'react-icons/ci';
import './storeuser.scss'
import { GoDownload } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import filterICON from '../../../../public/images/figma-icons/filter.png'
import useCardStore from '@/Components/Store/userStore';

const StoreUserCard = lazy(() => import('@/Components/storeUserCard/StoreUserCard'));

let data = [
  {
      totalData : '100',
      result : [
          {
              userID: '1',
              name: 'John Cena',
              status: 'Active',
              img: 'https://img.freepik.com/free-photo/impressed-young-caucasian-ill-man-wearing-glasses-looking-camera-stretching-out-medical-capsules-towards-camera-isolated-orange-background-with-copy-space_141793-76434.jpg?w=900&t=st=1717229399~exp=1717229999~hmac=2bcf048c1d91fd44bdcb17fd758e0aae0ec731fe6f933fad6b47001b8c51fd7a',
              orders: '34',
              balance: '3456'
          },
          {
              userID: '2',
              name: 'Pranil Shrestha',
              status: 'Active',
              img: 'https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/274814730_1505885153187570_2365277894812667317_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vnTvF86LzaMQ7kNvgHanfQv&_nc_ht=scontent.fmey1-1.fna&oh=00_AYBSJvspvuyulMASMqqD-wOlZZMcpQgh3QjUPWpIR_yrrA&oe=6660B9D7',
              orders: '100',
              balance: '90777'
          },
          {
              userID: '3',
              name: 'Abhishek Magar',
              status: 'Blocked',
              img: 'https://img.freepik.com/free-photo/person-pressing-buzzer_23-2149731426.jpg?w=360&t=st=1717229418~exp=1717230018~hmac=660e49946ab1b3078b66d08fdbcfbc258197ec9acd58d5d9b4dfa7423568a816',
              orders: '2',
              balance: '4000'
          },
          {
              userID: '4',
              name: 'Shyam Tharu',
              status: 'Active',
              img: 'https://img.freepik.com/free-photo/man-wearing-denim-shirt-red-suspenders_273609-19395.jpg?w=996&t=st=1717229428~exp=1717230028~hmac=0e2dd304686e690ad66c54fbfc9c28c075d0aa282181c3c51e5d5a677b3ba452',
              orders: '1',
              balance: '670'
          },   
          {
              userID: '5',
              name: 'Krishna kohli',
              status: 'Blocked',
              img: 'https://img.freepik.com/free-photo/person-wearing-colorful-fashion_23-2151038363.jpg?t=st=1717229753~exp=1717233353~hmac=29ed31c489d97be64ffb9c12f4d09530197995a703c5dd57e8010c04664db051&w=360',
              orders: '58',
              balance: '4790'
          },   
      ]  
  }  
]

function StoreUsers() {
  
  const {selectedCards, addCard, removeCard} = useCardStore(); // using zustand store // [selectedCards] array containing ID of the selected user card
  const [activeBtn,  setActiveBtn] = React.useState('all')
  function handleChange(e, userID){
      const isChecked = e.target.checked;
      if(isChecked){
          addCard(userID)
      }
      else{
          removeCard(userID)
      }
  }

  function handleButtonClick(status){
    setActiveBtn(status)
  }

  return (
    <div className="storeUserPage">
    <div className="top">
          <div className="header">
            <h1>Store Users</h1>
            <div className="btn">
              <button className='export'><GoDownload />Export</button>
              <button className='customer'><GoPlus />Add Costumer</button>
            </div>
          </div>
          <div className="filter">
              <div className="btn-group">
                  <button className={activeBtn === 'all' ? 'active' : ''} onClick={()=>handleButtonClick('all')}>All Status</button>
                  <button className={activeBtn === 'active' ? 'active' : ''} onClick={()=>handleButtonClick('active')}>Active</button>
                  <button className={activeBtn === 'blocked' ? 'active' : ''} onClick={()=>handleButtonClick('blocked')}>Blocked</button>
              </div>
              <div className="search">
                <div className="input-box">
                      <CiSearch color='#2B3674' size={20}/>
                      <input type="text" placeholder="Search Customers..." />
                  </div>
                  <button><img src={filterICON} alt="" /> Filter</button>
              </div>
          </div>
    </div>
    <div className="hero">
      
        <div className="card-con">
          {
            data[0].result.map((item)=>{
              return( 
                <>
                  <Suspense fallback={<div>Loading...</div>}>
                      <StoreUserCard key={item.userID} data={item} handleChange={handleChange}/> 
                  </Suspense>
                </>
              )
            })
          }
        </div>
      
    </div>
    </div>
  )
}

export default StoreUsers;
