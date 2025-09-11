import { Routes, Route } from 'react-router-dom'
import './assets/css/App.css'
import Footer from './components/Footer'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

function App() {
	return (
		<>
			<Routes></Routes>
			<FirstPage />
			<SecondPage />
			{/* <Footer /> */}
		</>
	)
}

export default App