import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Reviewbox from "../../components/reviewbox/Reviewbox";
import { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import PatientShow from "../../components/PatientProfile/PatientShow";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const username = useParams().username;
    const { user } = useContext(AuthContext);
    const [viewUser, setUser] = useState();
    const [allCus, setCus] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axios.get("/customers/all");
            setCus(res.data);
        }
        fetchUsers();
    }, [username]);

    // useEffect(()=>{
    //     const isDoctor = (n) => {
    //         for(const u of allCus){
    //             if(n===u.username) setIsDoc(false);
    //         }
    //         console.log(isDoc);
    //     }
    //     isDoctor(username);
    // },[]);

    useEffect(() => {
            const fetchDoc = async () => {
                const res = await axios.get(`/doctors?doctorname=${username}`);
                setUser(res.data);
            };
            const fetchCus = async () => {
                const res = await axios.get(`/customers?customername=${username}`);
                setUser(res.data);
            };

            const fetchTypeUser = async (n) =>{
                for(const u of allCus){
                    if(n===u.username) {
                        fetchCus();
                        return;
                    }
                }
                fetchDoc();
            }
            fetchTypeUser(username);
        }, [allCus]);

    const ProfileDoctor = () => {
        const [shown, setShown] = useState(false);
        const handleAddReview = async (e) => {
            e.preventDefault();
            setShown(!shown);
        };

        const handleBookBtn = async (e) => {
            e.preventDefault();
        };

        // useEffect(() => {
        //     const fetchUser = async () => {
        //         const res = await axios.get(`/doctors?doctorname=${username}`);
        //         setUser(res.data);
        //     };
        //     fetchUser();
        // }, [username]);

        return (
            <>
                <Navbar />
                <div className="profile">
                    <div className="profileTop">
                        <div className="topLeft">
                            <img
                                src={
                                    user?.profilePicture
                                        // ? PF + viewUser.profilePicture
                                        // : PF + "person/noAvatar.png"
                                }
                                alt=""
                                className="profileAvatar"
                            />
                            <span className="profileName">
                                {viewUser.username}
                            </span>
                            <Link to={`/calendar/${username}`} >
                            <button className="profileBook">
                                <span className="bookText">Book now</span>
                            </button>
                            </Link>
                        </div>
                        <div className="topRight">
                            <div className="infoTop">
                                <div className="infoCard dept">
                                    <span className="cardTitle">
                                        Current Department
                                    </span>
                                    <p className="infoDepartment">
                                        {viewUser?.currentDepartment ? 
                                        viewUser.currentDepartment
                                        :"NaN"}
                                    </p>
                                </div>
                                <div className="infoCard spec">
                                    <span className="cardTitle">
                                        Specialization
                                    </span>
                                    <p className="infoDepartment">
                                        {viewUser?.services ? 
                                        viewUser.services
                                        :"NaN"}
                                    </p>
                                </div>
                                <div className="infoCard exp">
                                    <span className="cardTitle">
                                        Work expererience
                                    </span>
                                    <p className="infoDepartment">
                                        {viewUser?.workingDesc ? 
                                        viewUser.workingDesc
                                        :"NaN"}
                                    </p>
                                </div>
                            </div>
                            {/* <div className="infoBottom">

                            </div> */}
                        </div>
                    </div>
                    <div className="profileBottom">
                        <div className="bottomLeft">
                            <div className="bottomInfo">
                                <div className="bottomInfoText">
                                    Information
                                </div>
                                <div className="bottomInfoTextDetail">
                                    Birthday:{" "}
                                    {viewUser?.dateOfBirth
                                        ? viewUser.dateOfBirth
                                        : "NaN"}
                                </div>
                                <div className="bottomInfoTextDetail">
                                    Email:{" "}
                                    {viewUser?.email ? viewUser.email : "NaN"}
                                </div>
                                <div className="bottomInfoTextDetail">
                                    Phone:{" "}
                                    {viewUser?.phoneNumber
                                        ? viewUser.phoneNumber
                                        : "NaN"}
                                </div>
                            </div>
                        </div>
                        <div className="bottomRight">
                            <div className="patientCmt">
                                <span className="cmtTitle">
                                    Patient reviews
                                </span>
                                <button className="btnCmt" onClick={handleAddReview}>
                                    <span className="btnCmtTitle">
                                        + Add a comment
                                    </span>
                                </button>
                                {shown && <Reviewbox viewUser={viewUser} />}
                                <div className="cmtList">
                                    <ReviewCard user={viewUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ProfilePatient = () => {
        return(
            <>
                <Navbar />
                <PatientShow viewUser={viewUser}/>
            </>
        )
    }

    return (
        <>
            {(viewUser && viewUser.hasOwnProperty('numberOfBookings')) && (<ProfileDoctor />)}
            {(viewUser && !viewUser.hasOwnProperty('numberOfBookings')) && (<ProfilePatient />)}
        </>
    );
}
