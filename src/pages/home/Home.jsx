import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import UserCard from "../../components/userCard/UserCard";
import Post from "../../components/post/Post";
import Ranking from "../../components/ranking/Ranking";
import Share from "../../components/share/Share";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const { user } = useContext(AuthContext);
    const [allDoctors, setAllDoctors] = useState([]);
    const [posts, setPosts] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/doctors/all/");
            setAllDoctors(res.data);
        };
        fetchUser();
    }, [user._id]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts/allPosts/");
            setPosts(res.data);
        };
        fetchPosts();
    }, [user._id]);

    return (
        <>
            <Navbar />
            <div className="homeWrapper">
                <div className="homeTop">
                    <button className="news-feed--sort-button newest">
                        <span className="news-feed--sort-button--text">Newest</span>
                    </button>
                    <button className="news-feed--sort-button most-liked">
                        <span className="news-feed--sort-button--text">Most liked</span>
                    </button>
                </div>
                <div className="homeMiddle">
                    <Share />
                </div>
                <div className="homeBottom">
                    <div className="homeLeft">
                        {posts.length
                            ? posts.map((p) => <Post post={p} />)
                            : "Let's make a post"}
                    </div>
                    <div className="homeRight">
                        <div className="adBanner">
                            <img
                                src={PF + "system/ads.jpg"}
                                alt=""
                                className="adImg"
                            />
                        </div>
                        <div className="news-feed--doctor-ranking-container">
                            <div className="news-feed--doctor-ranking-text">Best Doctors</div>
                            <Ranking allDoctors={allDoctors} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
