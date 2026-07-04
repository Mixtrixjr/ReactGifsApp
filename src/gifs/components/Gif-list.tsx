import { FC } from "react";
import { Gif } from "../interfaces/gif.interface";

interface GifListProps {
gifs: Gif[];
}


export const GifList: FC<GifListProps> = ({gifs}) => {
  return (
    <>
   {/*Gifs*/}
    <div className="gifs-container">
         {
         gifs.map((gif) => (
            <div key={gif.id} className='gif-card'>
                <img src={gif.url} alt={gif.title}></img>
                <h3>{gif.title}</h3>
                <p>{gif.width} x {gif.height}(1.5MB)</p>

            </div>
         )  
         )}
    </div>
    </>
  );

  

 }