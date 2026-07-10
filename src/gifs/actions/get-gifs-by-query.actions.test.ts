import { describe, expect, test } from "vitest";
import { getgifsbyquery } from './get-gifs-by-query.actions';
import AxiosMockadapter from  'axios-mock-adapter'
import { giphyapi } from "../api/giphy.api";
import { giphysearchresponsemock } from "../../test/mocks/giphy.response.data";

describe('getgifsbyquery', () => {

    const mock = new AxiosMockadapter(giphyapi)

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
                expect(typeof gif.id).toBe(String)
                expect(typeof gif.title).toBe(String)
                expect(typeof gif.url).toBe(String)
                expect(typeof gif.height).toBe(Number)
                expect(typeof gif.width).toBe(Number)
            })

    
    


})

})

