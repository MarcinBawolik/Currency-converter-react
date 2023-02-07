import  Form  from "./Form";
import { currencies } from "./currencies";
import { useState } from "react";

function App() {
 
  const [result, setResult] = useState();

  const calculateResault = ({currency, amountToBeConverted}) => {
    const rate = currencies
    .find(({ shortName }) => shortName === currency)
    .rate;

    setResult({
      sourceAmount: +amountToBeConverted,
      targetAmount: amountToBeConverted / rate,
      currency,
    });
  }
  return (
    <div>
      <Form 
      calculateResault={calculateResault}
      result={result}
      />
    </div>
  )
}

export default App;
