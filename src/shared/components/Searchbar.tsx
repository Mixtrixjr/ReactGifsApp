import { useEffect, useState } from "react";


interface SearchbarProps {
  placeholder?: string;
  OnSearch: (term: string) => void;
  onAddPreviousSearch?: (term: string) => void;
}

export const Searchbar = ({ placeholder = "Buscar", OnSearch, onAddPreviousSearch }: SearchbarProps) => {

  const [term, setTerm] = useState("");

  useEffect(()=>{
    const timeoutid = setTimeout(() => {
      OnSearch(term.toLowerCase().trim());
    },700);
    return() => {clearTimeout(timeoutid)};
  },[term,OnSearch])

  const handlesearch = () => {
    const normalizedTerm = term.toLowerCase().trim();

    if (normalizedTerm === "") {
      window.alert("El campo de búsqueda no puede estar vacío");
      return;
    }

    onAddPreviousSearch?.(normalizedTerm);
    OnSearch(normalizedTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handlesearch();
    }
  };

  
  return (
    <>  
    {/*Search*/}
    <div className="search-container">
        <input type="text" 
        placeholder={placeholder} 
        value={term} 
        onChange={(event) => setTerm(event.target.value)} 
        onKeyDown={(event) => {handleKeyDown(event)}}>
        </input>
        <button onClick={handlesearch}>Buscar</button>
    </div>
    </>
  );
  
};

