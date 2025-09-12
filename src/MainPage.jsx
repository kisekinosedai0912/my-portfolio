import Side from './components/Side.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

export default function FirstPage() {
    return (
        <>
            <Routes></Routes>
            {/* About me */}
            <section id="first-page" className="flex flex-row w-screen h-screen">
                <Side />
                <AboutMe />
            </section>

            {/* Skills */}
            <section id="second-page" className="flex flex-col w-screen h-screen">
                <Skills />
            </section>

            {/* Projects */}
            <section id="third-page" className="flex flex-col w-screen h-screen">
                <Projects />
            </section>
        </>
    )
}