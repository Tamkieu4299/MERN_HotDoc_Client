import "./register.css";
import { useRef } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const phone = useRef();
    const idnumber = useRef();
    const navigate = useNavigate();
    
    const handleClickCustomer = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                phoneNumber: phone.current.value,
                idNumber: idnumber.current.value,
            };
            try {
                await axios.post("/customers/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };
    const handleClickDoctor = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                phoneNumber: phone.current.value,
                idNumber: idnumber.current.value,
            };
            try {
                await axios.post("/doctors/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="login">
                <div className="loginTop">
                    <div className="loginLeft">
                        <div className="title">
                            Register an account for further benefits and
                            information.
                        </div>
                        <form className="form">
                            <span className="label">Email</span>
                            <input
                                placeholder="youremail@gmail.com"
                                type="email"
                                className="input"
                                ref={email}
                                required
                            />
                            <span className="label">Username</span>
                            <input
                                placeholder="your username"
                                type="username"
                                className="input"
                                ref={username}
                                required
                            />
                            <span className="label">Password</span>
                            <input
                                placeholder="******"
                                type="password"
                                className="input"
                                ref={password}
                                required
                            />
                            <span className="label">Password again</span>
                            <input
                                placeholder="******"
                                type="password"
                                className="input"
                                ref={passwordAgain}
                                required
                            />
                            <span className="label">Phone number</span>
                            <input
                                placeholder="84+ 34086256"
                                type="phoneNumber"
                                className="input"
                                ref={phone}
                                required
                            />
                            <span className="label">ID number</span>
                            <input
                                placeholder="Your national ID"
                                type="idNumber"
                                className="input"
                                ref={idnumber}
                                required
                            />
                            <div className="choices">
                                <button
                                    className="loginButton"
                                    type="submit"
                                    onClick={handleClickCustomer}
                                >
                                    <span className="loginText">Customer</span>
                                </button>
                                <button
                                    className="loginButton"
                                    type="submit"
                                    onClick={handleClickDoctor}
                                >
                                    <span className="loginText">Doctor</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="loginRight">
                        <div className="background"></div>
                    </div>
                </div>
                <div className="loginBottom"></div>
            </div>
        </>
    );
}
