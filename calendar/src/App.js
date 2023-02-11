import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar";
import moment from 'moment';
moment.locale('ru');

function App() {
  const now = new Date();

// внутри компонента App:
  return (
      <Calendar date={now} />
  );
}

export default App;
