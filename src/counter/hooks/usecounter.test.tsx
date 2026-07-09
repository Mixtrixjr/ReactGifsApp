import { describe, expect, test } from "vitest";
import Usecounter from "./usecounter";
import { act, renderHook } from "@testing-library/react";

describe('use counter', () => {

    test('should initialize with default value of five', () => {
            const {result} = renderHook( () => Usecounter());

        expect(result.current.Counter).toBe(5)
    })
    test('should increment counter when handleadd is called', () => {
            const {result} = renderHook( () => Usecounter());

        act(()=> {
            result.current.handleadd()
        })

        expect(result.current.Counter).toBe(6)
    })
    test('should decreased counter when handlesub is called', () => {
            const {result} = renderHook( () => Usecounter());

        act(()=> {
            result.current.handlesub()
        })
        
        expect(result.current.Counter).toBe(4)
    })
    test('should reset counter to default value when reset is called', () => {
            const {result} = renderHook( () => Usecounter());

        act(()=> {
            result.current.reset
        })
        
        expect(result.current.Counter).toBe(5)
    })
})