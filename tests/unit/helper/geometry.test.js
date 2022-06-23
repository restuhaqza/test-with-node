const Square = require('../../../helper/geomerty')

describe('Testing class Square', ()=>{
    it('area: should return area of square', ()=>{
        const square = new Square()

        const output = square.area(10, 5)

        const actual = 10 * 5

        expect(output).toBe(actual)
    })
})