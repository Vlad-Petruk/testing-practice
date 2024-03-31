
const stringCap = 'true'

test('capitalize', ()=> {
    expect(stringCap).toMatch(/^[A-Z].*$/)
})