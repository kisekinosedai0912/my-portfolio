import Side from './components/Side.jsx'
import AboutMe from './components/AboutMe.jsx'

export default function FirstPage() {
    return (
        <section id="first-page" className="flex flex-row w-screen h-screen">
            <Side />
            <AboutMe />
        </section>
    )
}