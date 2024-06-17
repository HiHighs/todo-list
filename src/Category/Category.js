import Task from '../Task/Task';
import styles from './Category.module.css';

function Category({ name, emoji, color, tasks, onToggleTaskCompleted }) {
  const style = {
    backgroundColor: `rgb(${color})`,
  };

  return (
    <div className={styles.container} style={style}>
      <div className={styles.innerContainer}>
        <h3>
          {name} {emoji}
        </h3>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTaskCompleted={onToggleTaskCompleted}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
