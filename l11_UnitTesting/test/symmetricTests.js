let expect = require("chai").expect
const symmetry = require("../symmetric")
describe("SymmetricTests",function () {
    it("Should return true for [1,2,1]",function () {
        expect(symmetry([1,2,1])).to.be.equal(true)
    })
    it("Should return false for the word bob",function () {
        expect(symmetry("bob")).to.be.equal(false)
    })
    it("Should return true for [1,2]",function () {
        expect(symmetry([1,2])).to.be.equal(false)
    })
    it("Should return true for []",function () {
        expect(symmetry([])).to.be.equal(true)
    })
    it("Should return true for [test,2,test]",function () {
        expect(symmetry(['test',2,'test'])).to.be.equal(true)
    })
    it("Should return true for [test]",function () {
        expect(symmetry(['test'])).to.be.equal(true)
    })
    it("Should return true for [1,2,1]",function () {
        expect(symmetry([1,{a:5},1])).to.be.equal(true)
    })
    it("Should return true for [-1,2,-1]",function () {
        expect(symmetry([-1,2,-1])).to.be.equal(true)
    })
    it("Should return true for [-1,2,1]",function () {
        expect(symmetry([-1,2,1])).to.be.equal(false)
    })
})