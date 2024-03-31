import { capitalize } from "./testing-practice.mjs"

const stringCap = capitalize('true')
console.log(stringCap)

test('capitalize', ()=> {
    expect(stringCap).toMatch(/^[A-Z].*$/)
})