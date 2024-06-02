import { Link } from 'react-router-dom';
import './card.scss';
import stLogo from '/images/ST_.png'

function PremiumCard() {
  return (
    <Link>
        <div className='card-container'>
            <div className="circle">
                <div className="inner-circle">
                    <img src={stLogo} alt="solarius technologies logo" />
                </div>
            </div>
            <div className="text-con">
                <h1>Upgrade to PRO</h1>
                <p>to get access to all features! Connect with us! </p>
            </div>
        </div>
    </Link>
  )
}

export default PremiumCard;
