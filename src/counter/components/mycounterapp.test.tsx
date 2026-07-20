import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Mycounterapp from "./mycounterapp";

describe('mycounterapp',()=> {

    test('Should render the component', ()=>{

        render(<Mycounterapp></Mycounterapp>)

        expect(screen.getByRole('heading',{level: 1}).textContent).toContain('Counter: 5');
        expect(screen.getByRole('button',{name:'+1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'-1'})).toBeDefined();
        expect(screen.getByRole('button',{name:'Reset'})).toBeDefined();

    })
    test('Should increment the counter', ()=>{

        render(<Mycounterapp></Mycounterapp>)

        const labelh1 = screen.getByRole('heading',{level:1});
        const btn = screen.getByRole('button',{name:'-1'});

        fireEvent.click(btn)

        expect(labelh1.textContent).toContain('Counter: 4')


    })

})