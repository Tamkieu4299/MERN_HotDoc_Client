import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";
import Register from "../src/pages/register/Register";
import Profile from "../src/pages/profile/Profile";
import Viewdoctors from "./pages/viewdoctors/Viewdoctors";
import Viewusers from "./pages/viewdoctors/Viewusers";
import Calendar from "./pages/calendar/Calendar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientProfilePage from "./pages/PatientProfilePage/PatientProfilePage";
import DetailBlog from "./components/blog/DetailBlog";
import Drugstore from "./pages/drugstore/Drugstore";
import Checkout from "./pages/Checkout/Checkout";
import ProductContextProvider from "./pages/drugstore/productContext";
import './App.css';
import Homepage from "./pages/chat/Homepage";
import Chatpage from "./pages/chat/Chatpage";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./pages/chat/ChatProvider";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <div>
           
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
                            path="/viewdoctors"
                            element={!user ? <Navigate to="/" /> : (user.hasOwnProperty('numberOfBookings') ? <Viewusers /> : <Viewdoctors />)}
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
                        <Route path="/detail-blog/:id" element={<DetailBlog />} />
                        <Route path="/drugstore" element={!user ? <Navigate to="/" /> : <Drugstore />} />
                        <Route path="/checkout" element={!user ? <Navigate to="/" /> :<Checkout />} />
                        <Route path='/loginchat' element={<Homepage />} exact/>
                        <Route path='/chats' element={<Chatpage />} /> 
                    </Routes>
        </div>
    );
}

export default App;
