import { useState } from 'react';
import './App.css';
import Form from './Form/Form';

const categories = [
  { name: 'Work', emoji: '💼' },
  { name: 'Personal', emoji: '🧘' },
  { name: 'Hobby', emoji: '💃' },
  { name: 'Household', emoji: '🏡' },
  { name: 'Sport', emoji: '⚽' },
];

const initialTasks = [
  {
    title: 'Take out garbage',
    category: 'Household',
    date: new Date('06/07/2024'),
  },
  {
    title: 'Go for a job',
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
      <h1>My TODO list</h1>

      {!showForm && (
        <div className='showForm' onClick={() => setShowForm(true)}>
          +
        </div>
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
