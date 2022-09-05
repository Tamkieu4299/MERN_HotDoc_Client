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
        <div className="navbarWrapper">
            <div className="navLeft">
                <div className="logoText">HOTDOC</div>
                <div className="logoShape"></div>
            </div>
            <div className="navCenter">
                <Link to={"/"}><div className="page">Forum</div></Link>
                <div className="page">Meet Doctors</div>
                <div className="page">Messenger</div>
                <div className="page">Pharmacity</div>
            </div>
            <div className="navRight">
                {user && (
                    <Link to={`/profile/${user.username}`}>
                        <img
                            src={
                                user?.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                            className="navAvatar"
                        />
                    </Link>
                )}
                {!user ? (
                    <button className="navBtn">
                        <span className="btnText">Sign in</span>
                    </button>
                ) : (
                    <button className="navBtn" onClick={handleLogout}>
                        <span className="btnText">Log out</span>
                    </button>
                )}
            </div>
        </div>
    );
}
