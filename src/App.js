import Header from './components/Header'
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            remainder: true,
        },
        {
            id: 2,
            text: 'Meeteng at school',
            day: 'Feb 6th at 1:30pm',
            remainder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30pm',
            remainder: false,
        },
    ])
    return (
        <div className="container">
            <Header/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
