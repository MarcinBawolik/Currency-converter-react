import Form from "./Form";

function App() {
  const calculateResault = (amoutToBeConverted, result, currency) => {
    switch (currency) {
      case "USD":
        result = amoutToBeConverted / 4.4034
        break;

      case "EUR":
        result = amoutToBeConverted / 4.7415
        break;

      case "GBP":
        result = amoutToBeConverted / 5, 3353
        break;
    };

  };
  return (

    <div className="container">
      <Form />

    </div>
  )
}


export default App;
