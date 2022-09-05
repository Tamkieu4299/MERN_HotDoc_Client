import "./userCard.css";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Link to={`profile/${user.username}`}>
                <div className="userCard">
                    <div className="cardLeft">
                        <img
                            src={
                                user?.profilePicture
                                    ? user.profilePicture
                                    : PF + "/person/noAvatar.png"
                            }
                            alt=""
                            className="avatar"
                        />
                    </div>
                    <div className="cardRight">
                        <div className="name">{user.username}</div>
                        <div className="info">
                            <div className="contact">{user.email}</div>
                            <div className="online">
                                <div className="onlineIcon"></div>
                                <span className="onlineText">Online</span>
                            </div>
                        </div>
                        <div className="desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Architecto aperiam aut dolorum cumque ea
                            voluptatibus dolorem deserunt commodi impedit?
                            Consequatur!
                        </div>
                        <div className="control">
                            <div className="rating">
                                <img
                                    src={PF + "system/rating.png"}
                                    alt=""
                                    className="ratingImg"
                                />
                                <span className="ratingNumber">
                                    {user?.rating ? user.rating : "None"}
                                </span>
                            </div>
                            <div className="booking">
                                <img
                                    src={PF + "system/contact.png"}
                                    alt=""
                                    className="ratingImg"
                                />
                                <span className="ratingNumber">
                                    {user.numberOfBookings}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
