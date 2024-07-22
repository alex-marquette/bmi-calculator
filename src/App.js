import Header from "./Components/Header";
import FormInput from "./Components/FormInput";
import Button from "./Components/Button";
import { useState } from "react";



function App() {
  
  
  const [BMI, setBMI] = useState();
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  function handleWeightInput(newWeight) {
    setWeight(newWeight);
  }

  function handleHeightInput(newHeight) {
    setHeight(newHeight);
  }

  function calculateBMI(e){
    e.preventDefault();

    const newBMI = (weight / height/height) * 10000;
    setBMI(newBMI);
  }

  return (
    <main>
      <Header/>
      
      <form onSubmit={calculateBMI} className="bmi-form">
        <FormInput label="Weight" value={weight} onInput={handleWeightInput}/>
        <FormInput label="Height" value={height} onInput={handleHeightInput}/>
        <Button click={calculateBMI}>Calculate BMI</Button>
        
        <div className="result">
          {BMI && <p>BMI is <br/>{BMI.toFixed(2)}</p>}
        </div>
      </form>
      
    </main>
  );
}

export default App;
