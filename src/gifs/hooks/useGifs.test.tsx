import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import UseGifs from "./useGifs";
import * as GifsAction from '../actions/get-gifs-by-query.actions';

describe('useGifs', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })
    test('should return default values and methods', () => {
        //cuando queramos evaluar los componentes o funciones de un hook de react lo desestructuramos de la siguiente manera
        const {result} = renderHook(()=> UseGifs())

        expect(result.current.gifs.length).toBe(0)
        expect(result.current.Previousterms.length).toBe(0)
        expect(result.current.handleSearch2).toBeDefined()
        expect(result.current.handleLabelClick).toBeDefined() 
 
    })
    test('should return a list of gifs', async ()=>{
        const {result} = renderHook(()=> UseGifs())

        await act(async()=> {
         await  result.current.handleSearch2('goku')

        })


        expect(result.current.gifs.length).toBe(10)


    })

    test('should return a list of gifs when handlelabelclick is called', async () => {
        const {result} = renderHook(()=> UseGifs())

        await act(async()=> {
         await  result.current.handleLabelClick('goku')

        })


        expect(result.current.gifs.length).toBe(10)
    }) 

    test('should return a list of gifs from cache',async ()=> {
        const {result} = renderHook(()=> UseGifs())

        await act(async()=> {
         await  result.current.handleLabelClick('goku')

        })


        expect(result.current.gifs.length).toBe(10)

        vi.spyOn(GifsAction,'getgifsbyquery')
        .mockRejectedValue(new Error('this is a custom error'))

        await act(async()=> {
         await  result.current.handleLabelClick('goku')

        })


        expect(result.current.gifs.length).toBe(10)
    })

    test('should return no more than 8 previous term', async () => {
        const {result} = renderHook(() => UseGifs())

        vi.spyOn(GifsAction, 'getgifsbyquery')
            .mockResolvedValue([])

        await act(async() => { await result.current.handleSearch2('goku1') })
        await act(async() => { await result.current.handleSearch2('goku2') })
        await act(async() => { await result.current.handleSearch2('goku3') })
        await act(async() => { await result.current.handleSearch2('goku4') })
        await act(async() => { await result.current.handleSearch2('goku5') })
        await act(async() => { await result.current.handleSearch2('goku6') })
        await act(async() => { await result.current.handleSearch2('goku7') })
        await act(async() => { await result.current.handleSearch2('goku8') })
        await act(async() => { await result.current.handleSearch2('goku9') })

        expect(result.current.Previousterms.length).toBe(9)
        expect(result.current.Previousterms).toStrictEqual(['goku9', 'goku8', 'goku7', 'goku6', 'goku5', 'goku4', 'goku3', 'goku2', 'goku1'])
    })
})