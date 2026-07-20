import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Searchbar } from "./Searchbar";

describe('SearchBar', () => {

    test('should render search correctly', ()=>{

        const {container} = render(<Searchbar OnSearch={()=>{}}></Searchbar>)

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined()
        expect(screen.getByRole('button')).toBeDefined()

    })
    test('should call onsearch with the correct value after 700ms', async ()=>{
        const onSearch = vi.fn()
        render(<Searchbar OnSearch={onSearch}></Searchbar>)

        const input=screen.getByRole('textbox');
        fireEvent.change(input,{target: {value: 'test'}})

        await waitFor(()=>{
            expect(onSearch).toHaveBeenCalled()
            expect(onSearch).toHaveBeenCalledWith('test')
        })
        
    })
    test('should call only once with the last value(debounce)', async() => {
        const onSearch = vi.fn()
        render(<Searchbar OnSearch={onSearch}></Searchbar>) 

        const input=screen.getByRole('textbox');
        fireEvent.change(input,{target: {value: 't'}})
        fireEvent.change(input,{target: {value: 'te'}})
        fireEvent.change(input,{target: {value: 'tes'}})
        fireEvent.change(input,{target: {value: 'test'}})

        await waitFor(()=>{
            expect(onSearch).toHaveBeenCalledTimes(1)
            expect(onSearch).toHaveBeenCalledWith('test')
        })
        
    })
    test('should call onSearch when button click with a input value',()=>{
        const onSearch = vi.fn()
        render(<Searchbar OnSearch={onSearch}></Searchbar>)

        const input=screen.getByRole('textbox');
        fireEvent.change(input,{target: {value: 'test'}})

        const button= screen.getByRole('button')
        fireEvent.click(button)

        expect(onSearch).toHaveBeenCalledTimes(1)
        expect(onSearch).toHaveBeenCalledWith('test')
    })
    test('should the input has the correct placeholder value', () => {
        const value="Buscar Gif"
        render(<Searchbar OnSearch={()=>{}} placeholder={value}></Searchbar>)

        expect(screen.getAllByPlaceholderText(value)).toBeDefined()
    })

})