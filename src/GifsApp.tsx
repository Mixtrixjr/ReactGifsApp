import { useState } from 'react';
import { GifList } from './gifs/components/Gif-list.tsx';
import { Customheader } from './shared/components/Customheader.tsx';
import { Searchbar } from './shared/components/Searchbar.tsx';
import { Previoussearche } from './shared/components/Previoussearche.tsx';
import { getgifsbyquery } from './gifs/actions/get-gifs-by-query.actions.ts';
import { Gif } from './gifs/interfaces/gif.interface.ts';

export const GifsApp = () => {


    const [gifs, setgifs] = useState<Gif[]>([])
    const [Previousterms, setPreviousTerms] = useState<string[]>([]);
    const handleLabelClick = (term: string) => {console.log(`Termino clickeado: ${term}`);}
    const handleSearch = (term: string) => {console.log(term)}
    const handleSearch2 = async (term: string) => {
      console.log(term);
      const currentterm = Previousterms.slice(0,8 );
      currentterm.unshift(term);
      setPreviousTerms(currentterm);
      const gifs = await getgifsbyquery(term)
      console.log({gifs})
      
      setgifs(gifs)
    }




     return (
    <>
    
   <Customheader title='Buscador De Gifs' description='Descubre y comparte el gif perfecto'></Customheader>
   <Searchbar placeholder='Buscarf Gifs' OnSearch={handleSearch} onAddPreviousSearch={handleSearch2}></Searchbar>
   <Previoussearche searches={Previousterms} onlabelclic={handleLabelClick}></Previoussearche>    
   <GifList gifs={gifs}></GifList>
    
    </>
    
  );
}

