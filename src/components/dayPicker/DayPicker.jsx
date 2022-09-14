// import { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import range from "lodash-es/range";
// import "./dayPicker.css";


// const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const todayObj = dayjs();

// export default function DayPicker({dayObj}) {

//     // const [dayObj, setDayObj] = useState(dayjs());

//     const thisYear = dayObj.year();
//     const thisMonth = dayObj.month();
//     const daysInMonth = dayObj.daysInMonth();

//     const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
//     const weekDayOf1 = dayObjOf1.day();

//     const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
//     const weekDayOfLast = dayObjOfLast.day();

//     // const handlePrev = () => {
//     //     setDayObj(dayObj.subtract(1, "month"));
//     // };

//     // const handleNext = () => {
//     //     setDayObj(dayObj.add(1, "month"));
//     // };


//     const handleDaySelect = (e) => {
//         e.preventDefault();
//         const s = document.querySelectorAll(".selected");
//         for (const d of s) d.classList.remove("selected");
//         e.target.classList.add("selected");
//         dayObj.set("date", e.target.textContent);
//         console.log(dayObj);
//     };

//     return (
//         <>
//             <div className="calendarWrapper">
//                 {/* <div className="header">
//                     <button
//                         type="button"
//                         className="nav nav--prev"
//                         onClick={handlePrev}
//                     >
//                         Back
//                     </button>
//                     <div className="datetime">
//                         {dayObj.format("MMM DD YYYY HH:mm")}
//                     </div>
//                     <button
//                         type="button"
//                         className="nav nav--prev"
//                         onClick={handleNext}
//                     >
//                         Next
//                     </button>
//                 </div> */}
//                 <div className="calendar">
//                     <div className="week-container">
//                         {weekDays.map((d) => (
//                             <div className="week-cell" key={d}>
//                                 {d}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="day-container">
//                         {range(weekDayOf1).map((i) => (
//                             <div className="day-cell day-cell--faded" key={i}>
//                                 {dayObjOf1
//                                     .subtract(weekDayOf1 - i, "day")
//                                     .date()}
//                             </div>
//                         ))}

//                         {range(daysInMonth).map((i) => (
//                             <div
//                                 className={`day-cell day-cell--in-month${
//                                     i + 1 === todayObj.date() &&
//                                     thisMonth === todayObj.month() &&
//                                     thisYear === todayObj.year()
//                                         ? " day-cell--today"
//                                         : ""
//                                 }`}
//                                 key={i}
//                                 onClick={handleDaySelect}
//                             >
//                                 {i + 1}
//                             </div>
//                         ))}

//                         {range(6 - weekDayOfLast).map((i) => (
//                             <div className="day-cell day-cell--faded" key={i}>
//                                 {dayObjOfLast.add(i + 1, "day").date()}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
