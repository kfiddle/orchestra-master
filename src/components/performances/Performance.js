import DateFormatter from '../helperFunctions/DateFormatter';

import styles from './Performance.module.css';

const Performance = props => {
    const { title, date } = props.performance;
    const displayDate = DateFormatter(date);

    return <div className={styles.outerContainer}>
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.dateDiv}>{displayDate}</div>
    </div>


};

export default Performance;