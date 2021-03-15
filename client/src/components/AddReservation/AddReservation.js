import { useState } from 'react';

const AddReservation = () => {
    const [toggle, setToggle] = useState(true);
    const [reservation, setReservation] = useState({
        startDate: '',
        endDate: '',
        guestName: '',
    });

    const toggleReservationScreen = () => {
        setToggle((prev) => !prev);
    };

    const addReservation = (e, reservation) => {
        e.preventDefault();
        console.log(reservation);

        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservation),
        }).then((res) => console.log(res));


        for (
            let i = Date.parse(reservation.startDate);
            i <= Date.parse(reservation.endDate);
            i += 86400000
        ) {
            const date = new Date(i);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            
            fetch(`http://localhost:3000/dates/${year}-${month}-${day}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({status: 'booked'})
            }).then((res) => console.log(res));
        }

        setReservation({
            startDate: '',
            endDate: '',
            guestName: '',
        });

        window.location.reload()
    };

    return (
        <div>
            <button onClick={toggleReservationScreen}>
                {toggle ? 'Add Reservation' : 'Cancel'}
            </button>
            {toggle ? (
                <span></span>
            ) : (
                <div>
                    <input
                        type='text'
                        id='guestName'
                        value={reservation.guestName}
                        placeholder='Guest Name...'
                        onChange={(e) =>
                            setReservation({
                                ...reservation,
                                guestName: e.target.value,
                            })
                        }
                    ></input>
                    <br />
                    <label htmlFor='startDate'>Start Date </label>
                    <input
                        type='date'
                        id='startDate'
                        value={reservation.startDate}
                        onChange={(e) =>
                            setReservation({
                                ...reservation,
                                startDate: e.target.value,
                            })
                        }
                    ></input>{' '}
                    <br />
                    <label htmlFor='endDate'>End Date </label>
                    <input
                        type='date'
                        id='endDate'
                        value={reservation.endDate}
                        onChange={(e) =>
                            setReservation({
                                ...reservation,
                                endDate: e.target.value,
                            })
                        }
                    ></input>
                    <br />
                    <button
                        type='submit'
                        onClick={(e) => addReservation(e, reservation)}
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddReservation;
