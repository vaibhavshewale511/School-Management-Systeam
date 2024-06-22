import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventsCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState('');
  const [eventMap, setEventMap] = useState({});
  const oneDayMillis = 24 * 60 * 60 * 1000;
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const timeArr = [
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
  ];
  const monthArr = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    initializeCalendar(new Date());
  }, []);

  const initializeCalendar = (dt) => {
    if (!dt) {
      dt = new Date();
    }
    const dayOfWeek = dt.getDay();
    const startDate = new Date(dt.getTime() - dayOfWeek * oneDayMillis);
    const endDate = new Date(startDate.getTime() + 6 * oneDayMillis);
    const currentWeekStr = `${getDateMonthString(startDate)} - ${getDateMonthString(endDate)}`;
    setCurrentWeek(currentWeekStr);
  };

  const getDateMonthString = (dt) => {
    const date = dt.getDate();
    const month = monthArr[dt.getMonth()];
    return `${date} ${month}`;
  };

  const prev = () => {
    initializeCalendar(new Date(new Date().getTime() - 7 * oneDayMillis));
  };

  const next = () => {
    initializeCalendar(new Date(new Date().getTime() + 7 * oneDayMillis));
  };

  const createHeading = (dt) => {
    const day = dayArr[dt.getDay()];
    const dateMonthString = getDateMonthString(dt);
    return (
      <div className="col col-day row-heading" key={dt}>
        <span className="day">{day}</span>
        <span className="date">{dateMonthString}</span>
      </div>
    );
  };

  const createTimeCell = (time) => {
    return (
      <div className="col col-time" key={time}>
        {time}
      </div>
    );
  };

  const createCell = (iter1, iter, dt) => {
    const idstr = getDateString(dt) + "-" + iter1;
    const eventClass = eventMap.hasOwnProperty(idstr) ? 'event' : '';
    const handleClick = () => handleCellClick(idstr);
    return (
      <div className={`col col-day cell ${eventClass}`} key={idstr} onClick={handleClick}>
        {eventMap[idstr]?.title}
      </div>
    );
  };

  const handleCellClick = (idstr) => {
    const existingEvent = eventMap[idstr];
    if (existingEvent) {
      const confirmDelete = window.confirm(`Do you want to remove the event "${existingEvent.title}"?`);
      if (confirmDelete) {
        const updatedEventMap = { ...eventMap };
        delete updatedEventMap[idstr];
        setEventMap(updatedEventMap);
      }
    } else {
      const title = prompt("Enter the title of Event", "Sample Event");
      if (title) {
        const [dt, hr] = idstr.split('-');
        const evnt = { title, startDay: dt, startTime: hr, duration: 1 }; // Simulated event object
        const updatedEventMap = { ...eventMap, [idstr]: evnt };
        setEventMap(updatedEventMap);
      }
    }
  };

  const getDateString = (dt) => {
    const date = dt.getDate();
    const month = dt.getMonth() + 1;
    const yr = dt.getFullYear();
    return `${date}${month}${yr}`;
  };

  const showAllYearsEvents = () => {
    const allEvents = Object.values(eventMap).map((event) => ({
      ...event,
      startDay: event.startDay.substring(0, 4), // Extract year from startDay
    }));
    console.log("All Years Events:", allEvents);
    // You can implement a display logic (e.g., modal, alert, etc.) to show `allEvents`.
  };

  // Inline CSS styles
  const styles = {
    container: {
      textAlign: 'center',
      fontSize: '16px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontWeight: 'normal',
      backgroundColor: '#A4B19B',
      width: '100%', // Adjusted for responsiveness
    },
    header: {
      fontSize: '25px',
      fontWeight: 'bolder',
      color: '#009688',
      padding: '20px 0',
    },
    headerBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
    },
    btn: {
      backgroundColor: '#f5f5f5',
      width: '50px',
      borderRadius: '5px',
      border: '1px solid',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(to bottom, #fff, #e6e6e6)',
      height: '30px',
      fontSize: '25px',
      lineHeight: '30px',
    },
    currentWeek: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'black',
    },
    calenderContainer: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #434D57',
      overflow: 'auto',
      height: '500px',
    },
    row: {
      display: 'flex',
      borderBottom: '1px solid #434D57',
    },
    col: {
      flex: '1',
      borderRight: '1px solid #434D57',
      padding: '5px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    rowHeading: {
      backgroundColor: '#C7D7EF',
      color: 'darkslategray',
      fontWeight: 'bold',
    },
    event: {
      backgroundColor: '#3A87AD',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>Event Calendar</header>
      <div className="headerBar" style={styles.headerBar}>
        <div className="btn" style={styles.btn} onClick={prev}>
          &#10094;
        </div>
        <div className="currentWeek" style={styles.currentWeek}>
          {currentWeek}
        </div>
        <div className="btn" style={styles.btn} onClick={next}>
          &#10095;
        </div>
        <div className="btn" style={styles.btn} onClick={showAllYearsEvents}>
          Show All Years' Events
        </div>
      </div>
      <div className="calenderContainer" style={styles.calenderContainer}>
        <div className="row" style={{ ...styles.row, ...styles.rowHeading }}>
          <div className="col col-time"></div>
          {Array.from({ length: 7 }).map((_, idx) =>
            createHeading(new Date(new Date().getTime() - (currentWeek.split(" ")[0]) + (idx * oneDayMillis)))
          )}
        </div>
        {Array.from({ length: 24 }).map((_, idx) => (
          <div className="row" style={styles.row} key={idx}>
            {createTimeCell(timeArr[idx])}
            {Array.from({ length: 7 }).map((_, dayIdx) =>
              createCell(idx, dayIdx, new Date(new Date().getTime() - (currentWeek.split(" ")[0]) + (dayIdx * oneDayMillis))))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
