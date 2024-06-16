import styles from './Category.module.css';

function Category({ name, emoji, color, tasks }) {
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
            <li className={styles.task}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
