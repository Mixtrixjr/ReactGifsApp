import { GifList } from './gifs/components/Gif-list.tsx';
import { Customheader } from './shared/components/Customheader.tsx';
import { Searchbar } from './shared/components/Searchbar.tsx';
import { Previoussearche } from './shared/components/Previoussearche.tsx';
import UseGifs from './gifs/hooks/useGifs.tsx';

export const GifsApp = () => {

const {gifs,Previousterms,handleLabelClick,handleSearch,handleSearch2} = UseGifs()




     return (
    <>
    
   <Customheader title='Buscador De Gifs' description='Descubre y comparte el gif perfecto'></Customheader>
   <Searchbar placeholder='Buscarf Gifs' OnSearch={handleSearch} onAddPreviousSearch={handleSearch2}></Searchbar>
   <Previoussearche searches={Previousterms} onlabelclic={handleLabelClick}></Previoussearche>    
   <GifList gifs={gifs}></GifList>
    
    </>
    
  );
}

