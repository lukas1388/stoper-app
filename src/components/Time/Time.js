const Time = ({ time }) => {
    return (
        <div>
            <h2>Stoper App</h2>
            <div>
                {("0" + Math.floor(time / 3600000) % 24).slice(-2)}:
                {("0" + Math.floor(time / 60000) % 60).slice(-2)}:
                {("0" + Math.floor(time / 1000) % 60).slice(-2)}.
                {("00" + (time / 10) % 100).slice(-2)}
            </div>
        </div>
    );
};

export default Time;