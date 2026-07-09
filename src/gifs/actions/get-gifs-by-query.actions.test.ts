import { describe, expect, test } from "vitest";
import { getgifsbyquery } from './get-gifs-by-query.actions';

describe('getgifsbyquery', () => {

    test('should return a list of gifs',async() => {

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
    })

})