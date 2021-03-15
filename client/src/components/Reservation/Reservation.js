const Reservation = ({ reservations, dateDetails }) => {

    let milisecDate = Date.parse(dateDetails.id)

    let reservation = reservations.find(r => {

        if (Date.parse(r.startDate) <= milisecDate && Date.parse(r.endDate) >= milisecDate) {
            return r;
        }
    })

    return (
        <div>
            <h4>{dateDetails.id}</h4>
            <p>Status: {dateDetails.status}</p>
            <p>{reservation?.guestName}</p>
        </div>
    );
};

export default Reservation;
