import styles from './Buttons.module.scss';

const Buttons = ({ setStart, setTime}) => {
    return(
        <div>
            <button className={styles.button} onClick={() => setStart(true)}>Start</button>
            <button className={styles.button} onClick={() => setStart(false)}>Stop</button>
            <button className={styles.button} onClick={() => setTime(0)}>Reset</button>  
        </div>
    );
}

export default Buttons;