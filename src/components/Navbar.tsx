import { ROUTES } from "../App"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useState } from "react"

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

	window.addEventListener("resize", () => {
		setIsMobile(window.innerWidth < 1024)
	})

	return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>
}

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className={styles.mobile}> 
			<div className={styles.hamburger} onClick={()=>{setIsOpen(!isOpen)}}></div>
        
			<div className={styles.links} style={{display: isOpen ? "flex" : "none"}}>
				<Link to={ROUTES.homePage.path}>
					<strong>00</strong>
					{ROUTES.homePage.title}
				</Link>
				<Link to={ROUTES.crewPage.path}>
					<strong>01</strong>
					{ROUTES.crewPage.title}
				</Link>
				<Link to={ROUTES.destinationPage.path}>
					<strong>02</strong>
					{ROUTES.destinationPage.title}
				</Link>
				<Link to={ROUTES.techPage.path}>
					<strong>03</strong>
					{ROUTES.techPage.title}
				</Link>
			</div>
		</nav>
	)
}

const DesktopNavbar = () => {
	return (
		<nav className={styles.desktop}>
			<div>
				<Link to={ROUTES.homePage.path}>
					<strong>00</strong>
					{ROUTES.homePage.title}
				</Link>
				<Link to={ROUTES.crewPage.path}>
					<strong>01</strong>
					{ROUTES.crewPage.title}
				</Link>
				<Link to={ROUTES.destinationPage.path}>
					<strong>02</strong>
					{ROUTES.destinationPage.title}
				</Link>
				<Link to={ROUTES.techPage.path}>
					<strong>03</strong>
					{ROUTES.techPage.title}
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
