import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header.js'
import Nav from './components/Navbar/Nav.js'
import Profile from './components/Profile/Profile.js'

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<Profile />
		</div>
	)
}

export default App
