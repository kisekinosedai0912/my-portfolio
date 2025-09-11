import Side from './components/Side.jsx'
import AboutMe from './components/AboutMe.jsx'

export default function FirstPage() {
    return (
        <section className="flex flex-row w-full h-screen">
            <Side />
            <AboutMe />
        </section>
    )
}