import { Route, BrowserRouter as Router, Routes } from "react-router"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"

const App = () => {
  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/crew" element={<Crew />} />
    <Route path="/destination" element={<Destination />} />
    <Route path="/tech" element={<Technology />} />
  </Routes>
</Router>
    </>
  )
}

export default App