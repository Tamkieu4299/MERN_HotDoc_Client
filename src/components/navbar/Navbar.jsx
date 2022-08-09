import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navbarWrapper">
            <div className="navLeft">
                <div className="logoText">HOTDOC</div>
                <div className="logoShape"></div>
            </div>
            <div className="navCenter">
                <div className="page">Forum</div>
                <div className="page">Meet Doctors</div>
                <div className="page">Messenger</div>
                <div className="page">Pharmacity</div>
            </div>
            <div className="navRight">
                <button className="btn">
                    <span className="btnText">Sign in</span>
                </button>
            </div>
        </div>
    );
}
