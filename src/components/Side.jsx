import { Phone, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Profile from '../assets/img/grad-pic-cropped.jpg'

export default function Header() {
    return (
        <section className="flex flex-col items-center w-[20%] h-[100dvh] py-6">
            {/* Circle profile */}
            <div className="flex flex-col items-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-600">
                    <img 
                        src={Profile} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="mt-3 flex flex-col items-center text-center">
                    <span className="font-semibold">Jasper Bendol</span>
                    <span className="text-sm text-gray-600">Full-stack Software Developer</span>
                </span>
            </div>

            {/* Contacts */}
            <div className="flex flex-col flex-1 items-center justify-center gap-4 w-full">
                <Link to="/" className="text-red-600">
                    <Phone size={24} />
                </Link>
                <Link to="/" className="text-red-600">
                    <Mail size={24} />
                </Link>
                <Link to="/" className="text-red-600 text-2xl">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to="/" className="text-red-600 text-2xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
            </div>
        </section>
    )
};