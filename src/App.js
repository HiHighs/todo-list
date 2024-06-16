import { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import TaskDate from './TaskDate/TaskDate';
import Task from './Task/Task';
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
    title: 'Take out garbage',
    category: 'Household',
    date: new Date('06/07/2024'),
  },
  {
    title: 'Go for a jog',
    category: 'Sport',
    date: new Date('13/06/2024'),
  },
  {
    title: 'Schedule meeting',
    category: 'Work',
    date: new Date('07/06/2024'),
  },
  {
    title: 'Meditate',
    category: 'Personal',
    date: new Date('11/06/2024'),
  },
  {
    title: 'Lift weights at the gym',
    category: 'Sport',
    date: new Date('13/06/2024'),
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
    setShowForm(false);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  return (
    <div className='App'>
      <h2>My TODO list</h2>

      {!showForm && (
        <>
          <TaskDate />

          <div className='categories-container'>
            {categories.map((c, index) => (
              <Category
                key={index}
                name={c.name}
                emoji={c.emoji}
                color={c.color}
                tasks={tasks.filter((task) => task.category === c.name)}
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
