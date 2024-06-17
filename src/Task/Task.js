import styles from './Task.module.css';

function Task({ task, onToggleTaskCompleted }) {
  return (
    <>
      <li
        onClick={() => onToggleTaskCompleted(task.id)}
        className={`${styles.task}  ${task.completed ? styles.completed : ''}`}
      >
        {task.title}
      </li>
    </>
  );
}

export default Task;
