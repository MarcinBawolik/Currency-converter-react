import  Form  from "./Form";
import { currencies } from "./currencies";
import { useState } from "react";

function App() {
 
  const [result, setResult] = useState();

  const calculateResault = (currency, amountToBeConverted) => {
    const rate = currencies.find(({index}) => index === currency).rate;

    setResult({
      sourceAmount: +amountToBeConverted,
      targetAmount: amountToBeConverted / rate,
      currency,
    });
  }
  return (

    <div className="container">
      <Form 
      calculateResault={calculateResault}
      result={result}
      />
    </div>
  )
}


export default App;
