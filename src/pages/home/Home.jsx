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

// import Blog from "../../components/blog/Blog";
// const fakeDataBlog = [
//     {
//         id: 1,
//         name: 'Có bầu 4 tháng có quan hệ được không',
//         des: 'Có bầu 4 tháng quan hệ được không? Chắc hẳn đây là mối băn khoăn của hầu hết các cặp vợ chồng. Liệu khi quan hệ có ảnh hưởng gì đến em bé trong bụng không?',
//         star: 5,
//         img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
//         author: 'Quan',
//         time: '20/8/2022'
//     },
//     {
//         id: 2,
//         name: 'Đau rát tầng sinh môn khi quan hệ là bệnh gì ?',
//         des: 'Có rất nhiều nguyên nhân gây đau rát tầng sinh môn khi quan hệ, đây là vùng nhạy cảm dễ bị tổn thương của phụ nữ. Tình trạng này có thể bị gây ra bởi tình trạng nhiễm trùng vùng kín, hoặc có thể là do một số loại bệnh lây truyền qua đường tình dục.',
//         star: 4 ,
//         img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
//         author: 'Tam',
//         time: '10/8/2022'
//     },
//     {
//         id: 3,
//         name: 'Uống thuốc tránh thai hàng ngày có thai không?',
//         des: 'Uống thuốc tránh thai hàng ngày là một trong những lựa chọn được các cặp đôi dùng khi muốn ngừa thai hiệu quả, Tuy nhiên, bên cạnh lợi ích của thuốc mang lại thì vẫn còn không ít những băn khoăn, thắc mắc của chị em khi dùng thuốc, trong đó câu hỏi được thắc mắc nhiều nhất là ” Uống thuốc tránh thai hàng ngày có thai không?',
//         star: 2,
//         img: 'https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg',
//         author: 'Phuong',
//         time: '01/07/2019'
//     },
// ]

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
                <div className="homeMiddle">
                    <Share />
                </div>
                <div className="homeBottom">
                    <div className="homeLeft">
                        {/* {allDoctors.length
                            ? allDoctors.map((doc) => (
                                  <UserCard user={doc} key={doc._id} />
                              ))
                            : "No Doctors"}  */}
                        {posts.length
                            ? posts.map((p) => <Post post={p} />)
                            : "Let's make a post"}

                        {/* {
                           fakeDataBlog.length > 0 && fakeDataBlog.map((e) => (
                            <Blog key={e.id} item={e} />
                            )) 
                        } */}
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
