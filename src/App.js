import { useState } from "react";
import Container from "./components/Container/Container";
import Time from "./components/Time/Time";
import Buttons from "./components/Buttons/Buttons";

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  return (
    <Container>
      <Time />
      <Buttons />
    </Container>
  );
};

export default App;
