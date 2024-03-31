import { capitalize, reverseString } from "./testing-practice.mjs"

const stringCap = capitalize('true');
const stringRev = reverseString('true')

test('capitalize', ()=> {
    expect(stringCap).toMatch(/^[A-Z].*$/)
})

test('reverse string', ()=> {
    expect(stringRev).toBe(stringRev)
})