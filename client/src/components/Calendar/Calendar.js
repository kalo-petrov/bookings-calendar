import { useEffect, useState } from 'react';
import Day from '../Day/Day';
import './Calendar.css';

const Calendar = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dates')
            .then((data) => data.json())
            .then((data) => setDates(data));
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
                        key={dateDetails.date}
                    >
                        <Day dateDetails={dateDetails} />{' '}
                    </div>
                );
            })}
        </div>
    );
};

export default Calendar;
