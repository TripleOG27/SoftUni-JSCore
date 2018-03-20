let Sumator = require('./sumatorClass')
const expect = require("chai").expect
describe("Sumator class",function () {
    let sumator
    beforeEach(function () {
        sumator = new Sumator()
    })
    it("test if data length is empty", function () {
        expect(sumator.data.length).to.be.equal(0)
    })
    //check functions
    describe("check if functions exist",function () {
        it("data is not undefined",function () {
            expect(sumator.data!==undefined).to.be.equal(true)
        })
        it("addfunc exists",function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })
        it("sumNum exists",function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })
        it("removeByFilter exists",function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })
        it("toString exists",function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })

//AddFunc
    describe("Add Function", function () {

        //addOnlyNumbers
        it("adding numbers", function () {
            sumator.add(5)
            sumator.add(5)
            sumator.add(5)
            expect(sumator.data.length).to.be.equal(3)
        })
        //addOnlyString
        it("adding only strings", function () {
            sumator.add('test1')
            sumator.add('test2')
            sumator.add('test3')
            expect(sumator.data.join(', ')).to.be.equal('test1, test2, test3')
        })
        //addOnlyObjects
        it("adding only objects", function () {
            sumator.add({name: 'Kiril', age: 25})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        })
        //add mixed-types
        it("adding mixed-type data", function () {
            sumator.add(4)
            sumator.add('Gosho')
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('4, Gosho, [object Object]')
        })
    })
//sumNums Function
    describe("SumNums function", function () {

        //sum with numbers
        it("sum only numbers", function () {
            sumator.add(5)
            sumator.add(5)
            sumator.add(5)
            expect(sumator.sumNums()).to.be.equal(15)
        })
        //sum with strings
        it("sum with strings", function () {
            sumator.add('test1')
            sumator.add('test2')
            sumator.add('test3')
            expect(sumator.sumNums()).to.be.equal(0)
        })
        //sum with objects
        //sum with mixed-types
        it("sum with mixed data", function () {
            sumator.add(4)
            sumator.add('Gosho')
            sumator.add({})
            expect(sumator.sumNums()).to.be.equal(4)
        })
    })
//removeByFilter
    describe("removeByFilter funtion test", function () {

        //removes items
        it("test if it removes all odd numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x % 2 !== 0)
            expect(sumator.data.join(',')).to.be.equal('0,2,4,6,8,10')
        })
        //remove nothing
        it("test to not remove anything", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x > 5)
            expect(sumator.data.join(',')).to.be.equal('0,1,2,3,4,5')
        })
        //throws error
        it("test error", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw()

        })

    })
//toString
    describe("toString function", function () {

        //array has items
        it("with items in array",function () {
            sumator.add(4)
            sumator.add("Gosho")
            expect(sumator.toString()).to.be.equal('4, Gosho')
        })
        //array does not have items
        it("when empty",function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        })
    })
})