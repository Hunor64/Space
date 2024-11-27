import { ROUTES } from "../App"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to={ROUTES.homePage.path}>
        <strong>00</strong>{ROUTES.homePage.title}</Link>
        <Link to={ROUTES.crewPage.path}><strong>01</strong>{ROUTES.crewPage.title}</Link>
        <Link to={ROUTES.destinationPage.path}><strong>02</strong>{ROUTES.destinationPage.title}</Link>
        <Link to={ROUTES.techPage.path}><strong>03</strong>{ROUTES.techPage.title}</Link>
    </nav>
  )
}

export default Navbar