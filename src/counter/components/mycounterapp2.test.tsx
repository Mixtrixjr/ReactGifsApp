import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Mycounterapp from "./mycounterapp";

const handleaddmock = vi.fn()
const handlesubmock = vi.fn()
const handleresetmock = vi.fn()


vi.mock('../hooks/usecounter',()=>(({
    default: () => ({
        Counter: 20,
        handleadd: handleaddmock,
        handlesub: handlesubmock,
        reset: handleresetmock
    })
})))

describe ('mycounterapp', () => {

    test('should render the component',()=>{

        render(<Mycounterapp></Mycounterapp>)
        screen.debug()

        
        expect(screen.getByRole('heading',{level: 1}).textContent).toContain('Counter: 20');
        expect(screen.getByRole('button',{name:'+1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'-1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'Reset'})).toBeDefined();
    })

    test('should call handleadd if button is clicked',() => {
        render(<Mycounterapp></Mycounterapp>)

        const btn = screen.getByRole('button',{name:'+1'})

        fireEvent.click(btn)

        expect(handleaddmock).toHaveBeenCalled()
        expect(handlesubmock).not.toHaveBeenCalled()
        expect(handleresetmock).not.toHaveBeenCalled()
    })
})