

import styles from './InstrumentButton.module.css';

const InstrumentButton = props => {
    const instrument = props.instrument;
    const rank = props.rank;

    return <button className={styles.button}>{instrument} {rank}</button>


};

export default InstrumentButton;