const Day = ({ dateDetails }) => {
    return (
        <div>
            <h4>{dateDetails.date}</h4>
            <p>Status: {dateDetails.status}</p>
            <p>Price: ${dateDetails.price}</p>
        </div>
    );
};

export default Day;
