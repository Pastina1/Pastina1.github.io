import { useRef } from 'react'
import LogoJ from '../../../assets/images/logo-j.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()


  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo