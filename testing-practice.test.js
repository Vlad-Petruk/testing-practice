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

    test('contains add property', ()=> {
        expect(calculator).toHaveProperty('add')
    })

    test('addes two numbers correctly', ()=> {
        expect(calculator.add(2,2)).toBe(4)
    })

    test('contains subsract property', ()=> {
        expect(calculator).toHaveProperty('substract')
    })

    test('substracts two numbers correctly', ()=> {
        expect(calculator.substract(4,2)).toBe(2)
    })

    test('contains divide property', ()=> {
        expect(calculator).toHaveProperty('divade')
    })

    test('divades two numbers correctly', ()=> {
        expect(calculator.divade(4,2)).toBe(2)
    })
})