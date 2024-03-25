import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";

function App() {
  let [dispText, setDispText] = useState("");

  const OnclickBtn = (buttonText) => {
    if (buttonText === "=") {
      const result = eval(dispText);
      setDispText(result);
    } else if (buttonText === "C") {
      setDispText("");
    } else {
      const newText = dispText + buttonText;
      console.log(newText);
      setDispText(newText);
    }
  };

  return (
    <Container>
      <div className={styles.calculator}>
        <Display displayValue={dispText}></Display>
        <ButtonsContainer OnclickBtn={OnclickBtn}></ButtonsContainer>
      </div>
    </Container>
  );
}

export default App;
