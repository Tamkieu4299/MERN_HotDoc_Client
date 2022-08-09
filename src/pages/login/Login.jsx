import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useRef } from "react";
import { loginCallCustomer, loginCallDoctor } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClickCustomer = (e) => {
        e.preventDefault();
        loginCallCustomer(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    const handleClickDoctor = (e) => {
        e.preventDefault();
        loginCallDoctor(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="loginTop">
                    <div className="loginLeft">
                        <div className="title">
                            Sign in for further benefits and information.
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
                            <span className="label">Password</span>
                            <input
                                placeholder="******"
                                type="password"
                                className="input"
                                ref={password}
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
