import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

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

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'service_tctpjgd',
        'template_z6t6jnm',
        form.current,
        'lR1_FgppJsAMsnocz'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.href = "https://pastina1.github.io/";
        },
        () => {
            alert('Failed to send the message, please try again')
        }
    )
   } 

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Aspiring and enthusiastic software developer interested in a junior role where I can apply my diverse technical skill set and collaborative mindset in contributing to innovative projects. 
                    </p>
                    <p>
                    If you have an opportunity or just want to get in touch with me, don't hesitate to use the form below!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required /> 
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required /> 
                                </li>
                                <li>
                                    <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                    /> 
                                </li>
                                <li>
                                    <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />

        
        </>
    )
}

export default Contact