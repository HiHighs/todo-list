import { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import TaskDate from './TaskDate/TaskDate';
import Category from './Category/Category';

const categories = [
  { name: 'Work', emoji: '💼', color: '177, 174, 230' },
  { name: 'Personal', emoji: '🧘', color: '131, 255, 153' },
  { name: 'Hobby', emoji: '💃', color: '106, 190, 249' },
  { name: 'Household', emoji: '🏡', color: '255, 116, 116' },
  { name: 'Sport', emoji: '⚽', color: '193, 175, 126' },
];

const initialTasks = [
  {
    id: 1,
    title: 'Take out garbage',
    category: 'Household',
    date: new Date(2024, 5, 17),
    completed: false,
  },
  {
    id: 2,
    title: 'Go for a jog',
    category: 'Sport',
    date: new Date(2024, 5, 17),
    completed: false,
  },
  {
    id: 3,
    title: 'Schedule meeting',
    category: 'Work',
    date: new Date(2024, 5, 18),
    completed: false,
  },
  {
    id: 4,
    title: 'Meditate',
    category: 'Personal',
    date: new Date(2024, 5, 17),
    completed: false,
  },
  {
    id: 5,
    title: 'Lift weights at the gym',
    category: 'Sport',
    date: new Date(2024, 5, 17),
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState(new Date());

  function handleAddTask(task) {
    console.log(tasks);
    console.log(task);
    setTasks([...tasks, { id: getHighestId() + 1, ...task }]);
    setShowForm(false);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  function handleToggleTaskCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function getHighestId() {
    return tasks.reduce(
      (max, task) => (max < task.id ? task.id : max),
      tasks[0].id
    );
  }

  return (
    <div className='App'>
      <h2>My TODO list</h2>

      {!showForm && (
        <>
          <TaskDate onSetDate={setDate} />

          <div className='categories-container'>
            {categories.map((c, index) => (
              <Category
                key={index}
                name={c.name}
                emoji={c.emoji}
                color={c.color}
                tasks={tasks.filter(
                  (task) =>
                    task.category === c.name &&
                    task.date.toLocaleDateString() === date.toLocaleDateString()
                )}
                onToggleTaskCompleted={handleToggleTaskCompleted}
              />
            ))}

            <div className='showForm' onClick={() => setShowForm(true)}>
              +
            </div>
          </div>
        </>
      )}
      {showForm && (
        <Form
          categories={categories}
          onAddTask={handleAddTask}
          onCloseForm={handleCloseForm}
        />
      )}
    </div>
  );
}

export default App;
