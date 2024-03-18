import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faJava, faJsSquare, faPython, faRProject, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const t = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(t);
        }
    },
    [],
    );

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    As a Master of Information Technology graduate, I've delved into technology, teamwork, and constant learning, all driven by my love for software development. Across various projects, I've refined my skills, both solo and in teams, and I'm eager for fresh challenges. Leading and participating in significant app developments showcases my dedication to delivering useful solutions.
                </p>
                <p>
                    Through a series of diverse and impactful projects, I've honed my skills, working both independently and in collaborative teams, and I'm excited to take on new challenges. I've led and participated in the development of several significant applications, demonstrating my commitment to delivering valuable solutions.
                </p>
                <p>
                    Through projects, I've grown personally and professionally, and I'm enthusiastic about applying this experience to future innovative endeavors.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#003151"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faRProject} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#000000"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About