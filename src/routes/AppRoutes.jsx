import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import PrivateRoute from "./PrivateRoute"
import ProtectedPage from "../pages/ProtectedPage"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Account from "../pages/Account"

import "../App.css"

const AppRoutes = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="App-Content">
                    <Routes>
                        <Route path="" element={< Home />} />
                        <Route path="/about" element={< About />} />
                        <Route path="/protected-page" element={<PrivateRoute><ProtectedPage /></PrivateRoute>} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/login" element={ <Login />} />
                        <Route path="/register" element={ <Register /> } />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRoutes