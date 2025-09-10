import Side from './components/Side.jsx'
import Body from './components/FirstPageBody.jsx'

export default function firstPage() {
    return (
        <section className='flex flex-row'>
            <Side />
			<Body />
        </section>
    )
}