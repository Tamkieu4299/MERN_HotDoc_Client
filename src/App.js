import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";
import Register from "../src/pages/register/Register";
import Profile from "../src/pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    const {user} = useContext(AuthContext)

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={user ? (<Home />) : (<Login />)} />
                <Route path="/login" element={user ?(<Navigate to ="/" />) : (<Login />)} />
                <Route  path="/register" element={user ? (<Navigate to="/" />) : (<Register />)} />
                <Route  path="/profile/:username" element={!user ? (<Navigate to="/" />) : (<Profile />)} />
            </Routes>
        </Router>
    )
}

export default App;
