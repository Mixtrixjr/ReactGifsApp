import { useState } from "react";


const Usecounter = (initialvalue: number=10) => {

    const [Counter, setcounter] = useState(5)

    const handleadd = () => {
        setcounter(Counter + 1)
    }
    const handlesub = () => {
        setcounter(Counter - 1)
    }
    const reset = () => {
        setcounter(initialvalue)
    }
  return {
    //values
    Counter,


    //Methods /Actions
    handleadd,
    handlesub,
    reset
  };
};

export default Usecounter;