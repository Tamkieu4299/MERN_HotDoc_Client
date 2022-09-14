import Navbar from "../../components/navbar/Navbar";
import { useContext, useRef } from "react";
import { loginCallCustomer, loginCallDoctor } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="login-left--title text-center">Sign In</div>
                        <form className="mt-3">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">
                                    Email address
                                </label>
                                <div className="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                    </div>
                                    <input
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        type="email"
                                        className="form-control"
                                        ref={email}
                                        required
                                        />
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    for="inputPassword"
                                    className="col-sm-2 col-form-label"
                                >
                                    Password
                                </label>
                                {/* <div className="col-sm-10"> */}
                                <input
                                    placeholder="Password"
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    ref={password}
                                    required
                                />
                                {/* </div> */}
                            </div>

                            <div class="d-flex align-items-center mt-5">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-lg col"
                                    onClick={handleClickCustomer}
                                >
                                    Sign In as Patient
                                </button>
                                
                                <div className="col text-center h3">OR</div>
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg col"
                                    onClick={handleClickDoctor}
                                >
                                    Sign In as Doctor
                                </button>
                            </div>

                            <hr className="my-5"/>

                            <div>
                                <span>Sign Up Button</span>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <div className="background"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
