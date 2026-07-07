import { describe,expect,test } from "vitest";
import { render,screen } from "@testing-library/react";
import { Customheader } from "./Customheader";


describe ("Customheader",()=>{
            const testtitle="texto de prueba"
            const testdesc = "texto de descripcion de prueba"


    test("should render component properly",()=>{
        render(<Customheader title={testtitle}></Customheader>);

        expect(screen.getByText(testtitle)).toBeDefined()
    })
    test("should render the description when provided",()=>{
        render(<Customheader title={testtitle} description={testdesc}></Customheader>);

        expect(screen.getByText(testdesc)).toBeDefined()
        expect(screen.getByRole('paragraph')).toBeDefined()
        expect(screen.getByRole('paragraph').innerHTML).toBe(testdesc)

    })

    test("should not render the description when not provided",()=>{
        const {container} = render(<Customheader title={testtitle}></Customheader>);

        const divelement = container.querySelector('.content-center')

        const h1 = divelement?.querySelector('h1')
        const p = divelement?.querySelector('p')
        expect(h1?.innerHTML).toBe(testtitle)
        expect(p).toBeNull()

        

        



        
    })
})