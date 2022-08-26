import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import UserCard from "../../components/userCard/UserCard";
import Ranking from "../../components/ranking/Ranking";
import axios from "axios";
import { Link } from "react-router-dom";
import Blog from "../../components/blog/Blog";

const fakeDataBlog = [
    {
        id: 1,
        name: 'Bai hoc so 1 o day',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impeditConsequatur!elit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impedit? Consequatur!',
        star: 5,
        img: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
        author: 'Khanh',
        time: '26/8/2022'
    },
    {
        id: 2,
        name: 'Bai hoc so 2 o day',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impeditConsequatur!elit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impedit? Consequatur!',
        star: 4 ,
        img: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
        author: 'Khanh',
        time: '26/8/2022'
    },
    {
        id: 3,
        name: 'Bai hoc so 3 o day',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impeditConsequatur!elit. Architecto aperiam aut dolorum cumque eavoluptatibus dolorem deserunt commodi impedit? Consequatur!',
        star: 2,
        img: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
        author: 'Khanh',
        time: '26/8/2022'
    },
]

export default function Home() {
    const { user } = useContext(AuthContext);
    const [allDoctors, setAllDoctors] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/doctors/all/");
            setAllDoctors(res.data);
        };
        fetchUser();
    }, [user._id]);

    return (
        <>
            <Navbar />
            <div className="homeWrapper">
                <div className="homeTop">
                    <button className="filterBtn daily">
                        <span className="filterBtnText">Daily</span>
                    </button>
                    <button className="filterBtn tips">
                        <span className="filterBtnText">Tips</span>
                    </button>
                    <button className="filterBtn facts">
                        <span className="filterBtnText">Facts</span>
                    </button>
                    <button className="filterBtn rec">
                        <span className="filterBtnText">Recommend</span>
                    </button>
                </div>
                <div className="homeBottom">
                    <div className="homeLeft">
                        {/* {allDoctors.length
                            ? allDoctors.map((doc) => (
                                  <UserCard user={doc} key={doc._id} />
                              ))
                            : "No Doctors"} */}

                        {
                           fakeDataBlog.length > 0 && fakeDataBlog.map((e) => (
                            <Blog key={e.id} item={e} />
                            )) 
                        }
                    </div>
                    <div className="homeRight">
                        <div className="adBanner">
                            <img
                                src={PF + "system/ads.jpg"}
                                alt=""
                                className="adImg"
                            />
                        </div>
                        <div className="ranking">
                            <div className="rankTitle">Best Doctors</div>
                            <Ranking allDoctors={allDoctors} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
