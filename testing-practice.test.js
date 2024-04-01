import { capitalize, reverseString, calculator } from "./testing-practice.mjs"


test('capitalize given string', ()=> {
    expect(capitalize('true')).toBe('True')
})

test('reverse given string', ()=> {
    expect(reverseString('True')).toBe('eurT')
})

describe('calculator object', ()=> {
    test('contains multiply property', ()=> {
        expect(calculator).toHaveProperty('multiply')
    })

    test('multiplies two numbers correctly', ()=> {
        expect(calculator.multiply(2,2)).toBe(4)
    })
})