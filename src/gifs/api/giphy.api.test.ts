import { describe, expect, test } from "vitest";
import { giphyapi } from "./giphy.api";

describe('giphyapi',() => {
    test('should be configured correctly', () => {
        const params = giphyapi.defaults.params
        
        expect(giphyapi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        })
    })
})