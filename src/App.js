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

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Toggle Remainder
    const toggleRemainder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task, remainder: !task.remainder } : task
            )
        )
    }

    return (
        <div className="container">
            <Header/>
            {tasks.length > 0 ? (<Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleRemainder}
            />
            ) : (
                'No tasks to show'
            )}
        </div>
    );
}

export default App;
