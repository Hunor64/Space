import { Route, BrowserRouter as Router, Routes } from "react-router"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import Navbar from "./components/Navbar"

export const ROUTES = {
  homePage: {path: '/', title: 'Home'},
  crewPage: {path: '/crew', title: 'Crew'},
  destinationPage: {path: '/destination', title: 'Destination'},
  techPage: {path: '/tech', title: 'Technology'}
}


const App = () => {
	return (
		<>
			<Router>
        <Navbar />
				<Routes>
					<Route path={ROUTES.homePage.path} element={<Home />} />
					<Route path={ROUTES.crewPage.path} element={<Crew />} />
					<Route path={ROUTES.destinationPage.path} element={<Destination />} />
					<Route path={ROUTES.techPage.path} element={<Technology />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
