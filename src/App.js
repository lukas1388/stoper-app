import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Time from "./components/Time/Time";
import Buttons from "./components/Buttons/Buttons";

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    let interval = null;

    if(start){
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <Container>
      <Time time={time} />
      <Buttons />
    </Container>
  );
};

export default App;
