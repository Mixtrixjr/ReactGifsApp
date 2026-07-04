import { FC } from "react";

export interface PrevioussearchesProps {
  searches: string[];
  onlabelclic: (term: string) => void;
}



export const Previoussearche:FC<PrevioussearchesProps> = ({searches, onlabelclic}) => {

  return (
    <>
    {/*Busquedas Previas*/}
    <div className="previous-searches">
    <h2>Busquedas Previas</h2>
    <ul className="previous-searches-list">
    {
        searches.map(term=>(
            <li key={term} onClick={() => onlabelclic(term)}>{term}</li>
        ))
    }
    </ul>
    </div>
    </>
  );
};

