import { useEffect, useState } from 'react';
import Day from '../Day/Day';
import Reservation from '../Reservation/Reservation';
import './Calendar.css';

const Calendar = () => {
    const [dates, setDates] = useState([]);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dates')
            .then((data) => data.json())
            .then((data) => setDates(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/reservations')
            .then((data) => data.json())
            .then((data) => setReservations(data));
    }, []);

    
    return (
        <div className='Calendar'>
            {dates?.map((dateDetails) => {
                return (
                    <div
                        className={
                            dateDetails.status === 'bookable'
                                ? 'FreeDay'
                                : 'BookedDay'
                        }
                        key={dateDetails.id}
                    >
                        {dateDetails.status === 'booked' ? (
                            <Reservation reservations={reservations} dateDetails={dateDetails} />
                        ) : (
                            <Day dateDetails={dateDetails} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Calendar;
