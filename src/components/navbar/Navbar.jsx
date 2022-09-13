import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Navbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleLogout = async () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    return (
        <div className="navbarWrapper sticky-top" id="navbar">
            <Link to={"/"}>
                <div className="navLeft">
                    <div className="navbar-bvbnd-logo-container">
                        <img src="https://www.bvbnd.vn/wp-content/uploads/2020/08/LogoBVBND.png" alt="bvbnd-logo" />
                    </div>
                    <div className="logoText">BỆNH VIỆN BỆNH NHIỆT ĐỚI</div>
                </div>
            </Link>
            <div className="navCenter">
                <Link to={"/"}><div className="page">Forum</div></Link>
                <Link to={"/viewdoctors"}><div className="page">Find a Doctor</div></Link>
                <Link to={"/loginchat"}><div className="page">Consult Online</div></Link>
                <Link to={"/drugstore"}><div className="page">Store</div></Link>
            </div>
            <div className="navRight">
                {user && (
                    <Link to={`/profile/${user.username}`}>
                        <img
                            src={
                                user?.profilePicture
                                    // ? PF + user.profilePicture
                                    // : PF + "person/noAvatar.png"
                            }
                            alt=""
                            className="navAvatar"
                        />
                    </Link>
                )}
                {!user ? (
                    <button className="navBtn">
                        <span className="btnText">Sign In</span>
                    </button>
                ) : (
                    <button className="navBtn" onClick={handleLogout}>
                        <span className="btnText">Logout</span>
                    </button>
                )}
            </div>
        </div>
    );
}
