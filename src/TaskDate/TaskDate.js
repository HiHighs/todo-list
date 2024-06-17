import { useState } from 'react';
import styles from './TaskDate.module.css';
import {
  format,
  isToday,
  addDays,
  subDays,
  isTomorrow,
  isYesterday,
} from 'date-fns';

function TaskDate({ initialDate = new Date(), onSetDate }) {
  const [date, setDate] = useState(initialDate);

  const dateString = getDateDisplayString(date);

  function previousDay() {
    const newDate = subDays(date, 1);
    setDate(newDate);
    onSetDate(newDate);
  }

  function nextDay() {
    const newDate = addDays(date, 1);
    setDate(newDate);
    onSetDate(newDate);
  }

  function getDateDisplayString(date) {
    return isToday(date)
      ? 'Today'
      : isYesterday(date)
      ? 'Yesterday'
      : isTomorrow(date)
      ? 'Tomorrow'
      : format(date, 'eeee dd/MM/yyyy');
  }

  return (
    <div className={styles.dateContainer}>
      <button className={styles.dateBtn} onClick={previousDay}>
        &#9664;
      </button>
      <span title={format(date, 'eeee dd/MM/yyyy')} className={styles.dateText}>
        {dateString}
      </span>
      <button className={styles.dateBtn} onClick={nextDay}>
        &#9654;
      </button>
    </div>
  );
}

export default TaskDate;
