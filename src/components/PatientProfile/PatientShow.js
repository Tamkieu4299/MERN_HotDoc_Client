import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import BookingHistory from "../bookingHistory/BookingHistory";
import "./patientShow.css";
import PatientForm from "./PatientForm";
import { AuthContext } from "../../context/AuthContext";
const delay = 2500;

export default function PatientShow({ viewUser }) {
    const [appsCustomer, setAppsCustomer] = useState([]);
    const [currentApp, setCurrentApp] = useState();
    const [index, setIndex] = useState(0);
    const [shown, setShown] = useState(false);
    const timeoutRef = useRef(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchApps = async () => {
            const res = await axios(
                `/appointments/forCustomer/${viewUser._id}`
            );
            setAppsCustomer(res.data);
        };
        fetchApps();
    }, [viewUser]);

    const editBtn = (e) => {
        e.preventDefault();
        setCurrentApp(appsCustomer[index]);
        setShown(!shown);
    };

    // const resetTimeout = () => {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // };

    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () =>
    //             setIndex((prevIndex) =>
    //                 prevIndex === appsCustomer.length - 1 ? 0 : prevIndex + 1
    //             ),
    //         delay
    //     );

    //     return () => {
    //         resetTimeout();
    //     };
    // }, [index]);

    return (
        appsCustomer && (
            <>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="row g-5 justify-content-center">
                            <div className="col-4 patientshow-leftcard bg-light me-5">
                                <h1 className="mb-5">Patient</h1>
                                <div className="text-center mb-3">
                                    <img
                                        className="patientShowAvatar"
                                        src={viewUser?.profilePicture}
                                        alt=""
                                    />
                                </div>
                                <div className="mb-3">
                                    Name: {viewUser.username}
                                </div>
                                <div className="mb-3">
                                    Email: {viewUser?.email}
                                </div>
                                <div className="mb-3">
                                    Phone number:{" "}
                                    {viewUser?.phoneNumber
                                        ? viewUser.phoneNumber
                                        : "None"}
                                </div>
                                <div className="mb-3">
                                    Date of Birth:{" "}
                                    {viewUser?.dateOfBirth
                                        ? viewUser.dateOfBirth
                                        : "None"}
                                </div>
                                <div className="mb-3">Blood: A</div>
                                {user.hasOwnProperty("numberOfBookings") && (
                                    <button
                                        className="btn btn-secondary"
                                        onClick={editBtn}
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                            <div className="col-6 patientshow-rightcard bg-light">
                                <h1 className="mb-5">Booking History</h1>
                                <div className="slideshow">
                                    <div
                                        className="slideshowSlider"
                                        style={{
                                            transform: `translate3d(${
                                                -index * 100
                                            }%, 0, 0)`,
                                        }}
                                    >
                                        {appsCustomer.length &&
                                            appsCustomer.map((b, index) => {
                                                return (
                                                    <div
                                                        className="slide"
                                                        key={index}
                                                        onClick={editBtn}
                                                    >
                                                        <BookingHistory
                                                            app={b}
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                    <div className="slideshowDots">
                                        {appsCustomer.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`slideshowDot${
                                                    index === idx
                                                        ? " active"
                                                        : ""
                                                }`}
                                                onClick={() => {
                                                    setIndex(idx);
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="slideshowNav">
                                            <div className="leftNav" onClick={() => {
                                                    if(index-1<0) setIndex(appsCustomer.length-1)
                                                    else setIndex(index-1);
                                                }}>&laquo;</div>
                                            <div className="rightNav" onClick={() => {
                                                    if(index+1>appsCustomer.length-1) setIndex(0)
                                                    else setIndex(index+1);
                                                }}>&raquo;</div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {shown && <PatientForm app={currentApp} />}
            </>
        )
    );
}
