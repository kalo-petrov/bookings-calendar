import './App.css';
import AddReservation from './components/AddReservation/AddReservation';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <h1>Bookings Calendar</h1>
      <AddReservation/>
      <Calendar/>
    </div>
  );
}

export default App;
