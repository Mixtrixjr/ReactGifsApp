import { useState } from "react";

const Mycounterapp = () => {
    const [Counter, setcounter] = useState(5)

    const handleadd = () => {
        setcounter(Counter + 1)
    }
    const handlesub = () => {
        setcounter(Counter - 1)
    }
    const reset = () => {
        setcounter(5)
    }

    

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
      <h1>Counter: {Counter}</h1>

      <div style={{display:'flex',gap: '10px'}}>
        <button onClick={handleadd}>+1</button>
        <button onClick={handlesub}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Mycounterapp;