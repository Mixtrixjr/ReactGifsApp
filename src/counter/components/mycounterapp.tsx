import Usecounter from "../hooks/usecounter";


const Mycounterapp = () => {

  const {Counter,handleadd,handlesub,reset} = Usecounter(5)
    

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