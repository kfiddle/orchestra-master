

import styles from './Performance.module.css';

const Performance = props => {
    const { title, date } = props.performance;

    return <div className={styles.outerContainer}>
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.dateDiv}>{date}</div>
    </div>


};

export default Performance;