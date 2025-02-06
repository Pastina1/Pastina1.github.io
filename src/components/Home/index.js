import LogoTitle from '../../assets/images/logo-j.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 's', 's', 'e']
    const jobArray = [
        's', 
        'o', 
        'f', 
        't', 
        'w', 
        'a', 
        'r', 
        'e', 
        ' ', 
        'd', 
        'e', 
        'v', 
        'e', 
        'l', 
        'o', 
        'p', 
        'e', 
        'r',
    ]
    
//Always clear timeout or any interval on component unmount.
    useEffect(() => {
        const t = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => {
            clearTimeout(t);
        }
    },
    [],
    );
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Web Developer Name" 
                />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19}/>
                </h1>
                <h2>Aspiring Developer / Innovative Collaborator / Master of Information Technology Graduate</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
                <Logo />
        </div>
        <Loader type="pacman" />
        </>

    );
}

export default Home