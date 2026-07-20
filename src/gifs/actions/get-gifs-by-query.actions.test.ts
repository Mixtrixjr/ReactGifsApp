import { beforeEach, describe, expect, test, vi } from "vitest";
import { getgifsbyquery } from './get-gifs-by-query.actions';
import AxiosMockadapter from  'axios-mock-adapter'
import { giphyapi } from "../api/giphy.api";
import { giphysearchresponsemock } from "../../test/mocks/giphy.response.data.ts";

describe('getgifsbyquery', () => {

    let mock = new AxiosMockadapter(giphyapi)

    beforeEach(() => {
        //mock.reset

        mock = new AxiosMockadapter(giphyapi)
    })

  /*  test('should return a list of gifs',async() => {

        const gifs = await getgifsbyquery('goku');
        const [gifs1] = gifs

        expect(gifs.length).toBe(10);

        expect(gifs1).toStrictEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String)
        })
    })*/

        test('should return a list of gifs', async() => {

            mock.onGet('/search').reply(200,giphysearchresponsemock)

            const gifs = await getgifsbyquery('metro')

            expect(gifs.length).toBe(10)
            
            gifs.forEach(gif => {
                expect(typeof gif.id).toBe('string')
                expect(typeof gif.title).toBe('string')
                expect(typeof gif.url).toBe('string')
                expect(typeof gif.height).toBe('number')
                expect(typeof gif.width).toBe('number')
            })

            

    
    


})
test ('should return an empty list of gifs is query is empty', async () => {

    mock.restore

    const gifs = await getgifsbyquery('');
    console.log(gifs)

    expect(gifs.length).toBe(0)

            })

            test ('should handle a error when the API returns an error', async () => {

                const consoleErrorSpy = vi.spyOn(console,'error').mockImplementation(()=>{
                    
                })

    mock.onGet('/search').reply(400, {data:{
        message: 'bad request'
    }})

    const gifs = await getgifsbyquery('goku')

    console.log(gifs)

    expect(gifs.length).toBe(0)
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
    expect(consoleErrorSpy.mock.calls[0][0]).toBeInstanceOf(Error)



})

})



