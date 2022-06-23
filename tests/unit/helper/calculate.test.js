const calculate = require("../../../helper/calculate")

describe("sum function", ()=>{
    it('should success', ()=>{
        const result = calculate.sum(5,10)

        expect(result).toBe(15)
    })
})