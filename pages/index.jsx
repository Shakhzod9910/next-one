import Head from 'next/head'
import Image from 'next/image'
import Untit from '../src/assets/img/Untit.png'
import WkLogo from '../src/assets/img/VK.png'
import InstaLogo from '../src/assets/img/instagram.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faVk, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'next/link'
export default function Home() {
  return (
  <>
  <section>
    <ul className="centerLocations container" >
      <li className="centerLocationItems">
        <span>Главный офис</span>
        <div className="locationWrapper">
          <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
          <p>ул. Деповская, 7 (оф. 406-Б)</p>
        </div>
        <div className="numbersWrapper">
           <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
            <div className="numbers">
            <span>+7289898987</span>
            <span>+7289898987</span>
            </div>
        </div>
      </li>
      <li className="centerLocationItems">
        <span>Главный офис</span>
        <div className="locationWrapper">
          <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
          <p>ул. Деповская, 7 (оф. 406-Б)</p>
        </div>
        <div className="numbersWrapper">
           <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
            <div className="numbers">
            <span>+7289898987</span>
            <span>+7289898987</span>
            </div>
        </div>
      </li>
      <li className="centerLocationItems">
        <span>Главный офис</span>
        <div className="locationWrapper">
          <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
          <p>ул. Деповская, 7 (оф. 406-Б)</p>
        </div>
        <div className="numbersWrapper">
           <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
            <div className="numbers">
            <span>+7289898987</span>
            <span>+7289898987</span>
            </div>
        </div>
      </li>
      <li className="centerLocationItems">
        <span>Главный офис</span>
        <div className="locationWrapper">
          <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
          <p>ул. Деповская, 7 (оф. 406-Б)</p>
        </div>
        <div className="numbersWrapper">
           <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
            <div className="numbers">
            <span>+7289898987</span>
            <span>+7289898987</span>
            </div>
        </div>
      </li>
      <li className="centerLocationItems">
        <span>Главный офис</span>
        <div className="locationWrapper">
          <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
          <p>ул. Деповская, 7 (оф. 406-Б)</p>
        </div>
        <div className="numbersWrapper">
           <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
            <div className="numbers">
            <span>+7289898987</span>
            <span>+7289898987</span>
            </div>
        </div>
      </li>
    </ul>
  </section>
   <footer>
    <div className='footerWrapper container'>
    <ul className='footerLogos'>
       <li>
          <div className='logoWrapper '>
            <Image src={Untit} className='bigLogo' alt='logo'/>
          </div>
          <div className='logosWrapper'>
            <div className='vkWrapper'>
            
              <FontAwesomeIcon icon={faVk}/>
             
            </div>
            <div className='instagramWrapper'>
           
             <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
       </li>
     </ul>
     <ul className='list'>
       <span>Menu</span>
       <li className='listItems'>About</li>
       <li className='listItems'>Programma cost</li>
       <li className='listItems'>Kurs</li>
       
     </ul>
     <ul className='list2'>
       <span>Adress</span>
       <li>Main office</li>
       <div className="location">
       <FontAwesomeIcon className='locat' icon={faMapMarkerAlt}/>
       <li> Lorem ipsum dolor sit amet consectetur adipisicing!</li>
       </div>
       
     </ul>
     <ul className='list3'>
       <span>Contact</span>
       <div className="iconPhone">
       <FontAwesomeIcon className='phone' icon={faPhoneAlt}/>
       <div className="numbers">
       <li className='contactsLinkItems'>1321343142</li>
       <li className='contactsLinkItems'>7576558758</li>
       </div>
       </div>
      
       <div className="email">
       <FontAwesomeIcon className='envelope' icon={faEnvelope}/>
       <li className='contactsLinkItems'>Lorem, ipsum dolor.</li>
       </div>
       
     </ul>
    </div>
   </footer>
  </>
  )
}