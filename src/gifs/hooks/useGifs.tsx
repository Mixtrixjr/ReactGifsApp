import { useRef, useState } from 'react';
import { getgifsbyquery } from '../actions/get-gifs-by-query.actions';
import { Gif } from '../interfaces/gif.interface';

const UseGifs = () => {

         const [gifs, setgifs] = useState<Gif[]>([])

         const [Previousterms, setPreviousTerms] = useState<string[]>([]);

         const gifscache = useRef<Record<string,Gif[]>>({})

         const handleLabelClick = async(term: string) => {
            if(gifscache.current[term])
            {
                setgifs(gifscache.current[term])
                return
            }

            const gifs= await getgifsbyquery(term)
            setgifs(gifs)
            console.log(`Termino clickeado: ${term}`);}

         const handleSearch = (term: string) => {console.log(term)}

         const handleSearch2 = async (term: string) => {
           console.log(term);
           const currentterm = Previousterms.slice(0,8 );
           currentterm.unshift(term);
           setPreviousTerms(currentterm);
           const gifs = await getgifsbyquery(term)
           console.log({gifs})
           
           setgifs(gifs)

           

         gifscache.current[term] = gifs
         }

         
  
    return {
        //values
        gifs,
        Previousterms,

        //methods
        handleLabelClick,
        handleSearch,
        handleSearch2
    };
};


export default UseGifs