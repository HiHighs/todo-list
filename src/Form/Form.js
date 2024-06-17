import styles from './Form.module.css';

import { useState } from 'react';

function Form({ categories, onAddTask, onCloseForm }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  function handleAddTask(e) {
    e.preventDefault();
    const task = {
      title: title,
      category: category,
      date: new Date(date),
      completed: false,
    };
    onAddTask(task);
  }

  return (
    <div className={styles.container}>
      <button className={styles.closeBtn} onClick={onCloseForm}>
        X
      </button>
      <h2 className={styles.title}>Add a task to your list</h2>
      <form className={styles.form}>
        <label className={styles.formLabel}>
          Title:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Go to the dentist...'
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.formSelect}
          >
            <option value='' disabled hidden>
              Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.emoji} {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.formLabel}>
          Title:
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.formInput}
          />
        </label>
        <button className={styles.submitBtn} onClick={(e) => handleAddTask(e)}>
          Add task
        </button>
      </form>
    </div>
  );
}

export default Form;
