import { Phone, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Profile from '../assets/img/grad-pic-cropped.jpg'

export default function Header() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-2 w-[20%] h-[100dvh]">
                {/* Circle profile */}
                <div className="w-42 h-40 rounded-full flex items-center justify-center">
                    <img src={Profile} alt="Profile" className="rounded-full" />
                </div>

                {/* Contacts */}
                <div className="flex flex-col flex-1 items-center justify-center gap-2 w-full">
                    <Link to="/" className="text-blue-600 hover:text-red-500">
                        <Phone size={24} />
                    </Link>
                    <Link to="/" className="text-blue-600 hover:text-red-500">
                        <Mail size={24} />
                    </Link>
                    <Link to="/" className="text-blue-600 text-2xl hover:text-red-500">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link to="/" className="text-blue-600 text-2xl hover:text-red-500">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
            </section>
        </>
    )
};