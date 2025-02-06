import { useRef } from 'react';
import LogoJ from '../../../assets/images/logo-j.png';
import './index.scss';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()


  return (
    <div className="logo-container" ref={bgRef}>
      <Tilt>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript,  Developer"
      />
      </Tilt>
    </div>
  )
}

export default Logo