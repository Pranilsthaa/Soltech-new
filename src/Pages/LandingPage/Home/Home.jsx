import './home.scss'
import callIcon  from '../../../../public/images/icon1.png'
import growthIcon from '../../../../public/images/icon2.png'
import progressIcon from '../../../../public/images/icon3.png'
import salesIcon from '../../../../public/images/icon4.png'
import clientsIcon from '../../../../public/images/icon5.png'

function Home() {
  return (
    <div className="homePage">
        <section className="hero">
            <div className="left">
                <h1>Empower Your E-Business with SolTech <br /> Illuminate Your Online Success</h1>
                <h2>A Dynamic online marketplace, where convenience meets choice.</h2>
                <div className="btn">
                  <a href="" className='vdo-btn'><span><img src="/images/play.png" alt="" />Watch Video</span></a>
                  <a href="" className='get-started-btn'>Get Started</a>
                </div>
             </div>
             <div className="right">
                  <img src={growthIcon} alt="" className='growthIcon'/>
                  <img src={callIcon} alt="" className='callIcon'/>
                  <img src={progressIcon} alt="" className='progressIcon'/>
                  <img src={salesIcon} alt="" className='salesIcon'/>
                  <img src={clientsIcon} alt="" className='clientsIcon'/>
             </div>
        </section>
    </div>
  )
}

export default Home
