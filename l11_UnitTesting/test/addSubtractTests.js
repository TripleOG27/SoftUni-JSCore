let expect = require("chai").expect
let addSub = require("../addSubtract")

describe("Add or Subtract",function () {
    let calculator
    beforeEach(function () {
        calculator = addSub()
    })
    it("Should return",function () {
        expect(calculator.get()).to.be.equal(0)
    })
    it("Should return",function () {
        calculator.add(10)
        expect(calculator.get()).to.be.equal(10)
    })
    it("Should return",function () {
        calculator.subtract(10)
        expect(calculator.get()).to.be.equal(-10)
    })
})