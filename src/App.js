import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";
import Register from "../src/pages/register/Register";
import Profile from "../src/pages/profile/Profile";
import Calendar from "./pages/calendar/Calendar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientProfilePage from "./pages/PatientProfilePage/PatientProfilePage";
import TodoPage from "./pages/TodoPage/TodoPage";
import DetailBlog from "./components/blog/DetailBlog";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={user ? <Home /> : <Login />} />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to="/" /> : <Register />}
                />
                <Route
                    path="/profile/:username"
                    element={!user ? <Navigate to="/" /> : <Profile />}
                />
                <Route
                    path="/calendar/:username"
                    element={!user ? <Navigate to="/" /> : <Calendar />}
                />
                <Route
                    path="/patientprofile"
                    element={<PatientProfilePage />}
                />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/detail-blog/:id" element={<DetailBlog />} />
            </Routes>
        </Router>
    );
}

export default App;
