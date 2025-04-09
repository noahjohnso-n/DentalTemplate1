// import WhiteLanding from "../WhiteLanding.js";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Booking() {
//     const [bookings, setBookings] = useState([]);
//     const [weeks, setWeeks] = useState([]);
//     const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    
//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const response = await fetch("/booking-invisalign", {
//                     method: "POST",
//                     headers: { 'Content-Type': 'application/json' }
//                 });
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch bookings");
//                 }
//                 const data = await response.json();
//                 setBookings(data);
//             } catch (error) {
//                 console.error("Error fetching bookings:", error);
//             }
//         };

//         fetchBookings();
//         setWeeks(getWeekDates(new Date())); // Generate week ranges
//     }, []);

//     const getWeekDates = (date) => {
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         const weekDates = [];
//         const firstWeekStart = new Date(today);
//         const firstWeekEnd = new Date(today);
//         firstWeekEnd.setDate(today.getDate() + (7 - today.getDay()) % 7);
//         weekDates.push({ start: firstWeekStart, end: firstWeekEnd });

//         let nextMonday = new Date(firstWeekEnd);
//         nextMonday.setDate(firstWeekEnd.getDate() + 1);

//         for (let i = 0; i < 3; i++) {
//             const start = new Date(nextMonday);
//             const end = new Date(start);
//             end.setDate(start.getDate() + 6);
//             weekDates.push({ start, end });
//             nextMonday.setDate(nextMonday.getDate() + 7);
//         }

//         return weekDates;
//     };

//     const goToNextWeek = () => {
//         if (currentWeekIndex < weeks.length - 1) {
//             setCurrentWeekIndex(currentWeekIndex + 1);
//         }
//     };

//     const goToPreviousWeek = () => {
//         if (currentWeekIndex > 0) {
//             setCurrentWeekIndex(currentWeekIndex - 1);
//         }
//     };

//     if (weeks.length === 0) return null;

//     const currentWeek = weeks[currentWeekIndex];

//     const filteredBookings = bookings.filter((booking) => {
//         const bookingDate = new Date(booking.date);
//         return bookingDate >= currentWeek.start && bookingDate <= currentWeek.end;
//     });

//     const currentDays = [];
//     let tempDate = new Date(currentWeek.start);
//     while (tempDate <= currentWeek.end) {
//         currentDays.push(new Date(tempDate)); // Store full date instead of just the day number
//         tempDate.setDate(tempDate.getDate() + 1);
//     }

//     console.log("Fetched bookings:", data);

//     return (
//         <>
//             <WhiteLanding />
//             <div className="booking-split">
//                 <div className="booking-left">
//                     <h1 className="booking-title">Choose a day and time</h1>

//                     <div className="calendar-box">
//                         <div className="date-box">
//                             <i className="bi bi-arrow-left" onClick={goToPreviousWeek}></i>
//                             <p>
//                                 {currentWeek.start.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
//                                 {" - "}
//                                 {currentWeek.end.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
//                             </p>
//                             <i className="bi bi-arrow-right" onClick={goToNextWeek}></i>
//                         </div>
//                     </div>

//                     <div className="date-box-under"></div>

//                     <div id="dayContainer">
//                         {currentDays.map((dateObj) => {
//                             const day = dateObj.getDate();
//                             const month = dateObj.toLocaleString("en-US", { month: "long" });

//                             const bookingsForDay = filteredBookings.filter((booking) => {
//                                 const bookingDate = new Date(booking.date);
//                                 return (
//                                     bookingDate.getDate() === day &&
//                                     bookingDate.getMonth() === dateObj.getMonth() &&
//                                     bookingDate.getFullYear() === dateObj.getFullYear()
//                                 );
//                             });

//                             return (
//                                 <div key={day} className="day-box">
//                                     <p className="day-label">{month} {day}</p>
//                                     <div className="appointment-date-under"></div>
//                                     <div className="bookings-list">
//                                         {bookingsForDay.length > 0 ? (
//                                             bookingsForDay.map((booking) => (
//                                                 <div className="appointment-box" key={booking._id}>
//                                                     <Link to = "/checkout" state = {{ details: booking }}><li className="appointment">{booking.time}</li></Link>
//                                                 </div>
//                                             ))
//                                         ) : (
//                                             <div className="appointment-box">
//                                                 <p className="no-appt">No appointments available.</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 <div className="map-container">
//                     <iframe
//                         title="map"
//                         src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6489.9827255424625!2d-83.01719428879414!3d39.948576354023395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFAKE%20DENTIST%20COLUMBUS!5e0!3m2!1sen!2sus!4v1742301259130!5m2!1sen!2sus"
//                         width="100%"
//                         height="100%"
//                         style={{ border: 0 }}
//                         allowFullScreen=""
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                 </div>
//             </div>
//         </>
//     );
// }



import WhiteLanding from "../WhiteLanding.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
    const [bookings, setBookings] = useState([]);
    const [weeks, setWeeks] = useState([]);
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/booking-invisalign", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch bookings");
                }
                const data = await response.json();
                console.log("Fetched bookings:", data);
                setBookings(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();
        setWeeks(getWeekDates(new Date())); // Generate week ranges
    }, []);

    const getWeekDates = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const weekDates = [];
        const firstWeekStart = new Date(today);
        const firstWeekEnd = new Date(today);
        firstWeekEnd.setDate(today.getDate() + (7 - today.getDay()) % 7);
        weekDates.push({ start: firstWeekStart, end: firstWeekEnd });

        let nextMonday = new Date(firstWeekEnd);
        nextMonday.setDate(firstWeekEnd.getDate() + 1);

        for (let i = 0; i < 3; i++) {
            const start = new Date(nextMonday);
            const end = new Date(start);
            end.setDate(start.getDate() + 6);
            weekDates.push({ start, end });
            nextMonday.setDate(nextMonday.getDate() + 7);
        }

        return weekDates;
    };

    const goToNextWeek = () => {
        if (currentWeekIndex < weeks.length - 1) {
            setCurrentWeekIndex(currentWeekIndex + 1);
        }
    };

    const goToPreviousWeek = () => {
        if (currentWeekIndex > 0) {
            setCurrentWeekIndex(currentWeekIndex - 1);
        }
    };

    if (weeks.length === 0) return null;

    const currentWeek = weeks[currentWeekIndex];

    const filteredBookings = bookings.filter((booking) => {
        const [month, day, year] = booking.date.split("-");
        const bookingDate = new Date(`${year}-${month}-${day}`);
        return bookingDate >= currentWeek.start && bookingDate <= currentWeek.end;
    });

    const currentDays = [];
    let tempDate = new Date(currentWeek.start);
    while (tempDate <= currentWeek.end) {
        currentDays.push(new Date(tempDate));
        tempDate.setDate(tempDate.getDate() + 1);
    }

    return (
        <>
            <WhiteLanding />
            <div className="booking-split">
                <div className="booking-left">
                    <h1 className="booking-title">Choose a day and time</h1>

                    <div className="calendar-box">
                        <div className="date-box">
                            <i className="bi bi-arrow-left" onClick={goToPreviousWeek}></i>
                            <p>
                                {currentWeek.start.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                                {" - "}
                                {currentWeek.end.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                            </p>
                            <i className="bi bi-arrow-right" onClick={goToNextWeek}></i>
                        </div>
                    </div>

                    <div className="date-box-under"></div>

                    <div id="dayContainer">
                        {currentDays.map((dateObj) => {
                            const day = dateObj.getDate();
                            const month = dateObj.toLocaleString("en-US", { month: "long" });

                            const bookingsForDay = filteredBookings.filter((booking) => {
                                const [bMonth, bDay, bYear] = booking.date.split("-");
                                const bookingDate = new Date(`${bYear}-${bMonth}-${bDay}`);
                                return (
                                    bookingDate.getDate() === day &&
                                    bookingDate.getMonth() === dateObj.getMonth() &&
                                    bookingDate.getFullYear() === dateObj.getFullYear()
                                );
                            });

                            return (
                                <div key={dateObj.toISOString()} className="day-box">
                                    <p className="day-label">{month} {day}</p>
                                    <div className="appointment-date-under"></div>
                                    <div className="bookings-list">
                                        {bookingsForDay.length > 0 ? (
                                            bookingsForDay.map((booking) => (
                                                <div className="appointment-box" key={booking._id}>
                                                    <Link to="/checkout" state={{ details: booking }}>
                                                        <li className="appointment">{booking.time}</li>
                                                    </Link>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="appointment-box">
                                                <p className="no-appt">No appointments available.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6489.9827255424625!2d-83.01719428879414!3d39.948576354023395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFAKE%20DENTIST%20COLUMBUS!5e0!3m2!1sen!2sus!4v1742301259130!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
