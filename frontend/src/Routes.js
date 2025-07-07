import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Violations from "./pages/violations"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/violations' element={<Violations />} />
        </Routes>
    )
}

export default AppRoutes