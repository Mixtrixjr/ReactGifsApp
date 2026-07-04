import { GifyResponse } from "../interfaces/gify.response";
import { Gif } from '../interfaces/gif.interface';
import { giphyapi } from "../api/giphy.api";

export const getgifsbyquery = async(query:String):Promise<Gif[]>=> 
    {
        const response = await giphyapi<GifyResponse>("/search",{
            params:{
                q: query,
                limit: 10,
            }
        })
        
return response.data.data.map((Gif)=>({
    id: Gif.id,
    title: Gif.title,
    url: Gif.images.original.url,
    width: Number(Gif.images.original.width),
    height: Number(Gif.images.original.height) }))
    }