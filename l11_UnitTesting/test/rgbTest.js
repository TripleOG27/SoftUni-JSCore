let expect = require("chai").expect
let rgb = require('../rgbToHex')

describe("Rgb to Hex",function () {
    it("Should return ",function () {
        expect(rgb(0,0,0)).to.be.equal('#000000')
    })
})