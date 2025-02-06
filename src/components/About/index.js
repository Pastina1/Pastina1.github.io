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
                    As an Information Technology graduate, I've delved into technology, teamwork, and constant learning, all driven by my love for software development. Across various projects, I've refined my skills, both solo and in teams, and I'm eager for fresh challenges. Leading and participating in significant app developments showcases my dedication to delivering useful solutions.
                </p>
                <p>
                    Through a series of diverse and impactful projects, I've honed my skills, working both independently and in collaborative teams, and I'm excited to take on new challenges. I've led and participated in the development of several significant applications, demonstrating my commitment to delivering valuable solutions.
                </p>
                <p>
                    Outside of my professional life I deeply value spending time with my friends and family. I also enjoy playing soccer, videogames, and going to the gym.
                </p>

                <div className="resume-button">
                    <a href="/portfolio/1/Jesse Falla Resume.pdf" download>
                        <button>DOWNLOAD MY RESUME</button>
                    </a>
                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#8B0000"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#306998"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faRProject} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faSquareTerminal} color="#00008B"/>
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