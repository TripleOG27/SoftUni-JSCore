let PaymentPackage = require('./t02_paymentPackage')
let expect = require('chai').expect

describe("Payment Package tests",function () {
    let payment
    beforeEach(function () {
        payment = new PaymentPackage('Pesho',20)
    })
    it('Check if all functions exist',function () {
        expect(Object.getPrototypeOf(payment).hasOwnProperty('name')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('value')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('VAT')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('active')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('toString')).to.be.equal(true)
    })
    it('Should throw error with empty string and negative number',function () {

        expect(()=>payment=new PaymentPackage('',20)).to.throw(Error)
        expect(()=>payment=new PaymentPackage()).to.throw(Error)
        expect(()=>payment=new PaymentPackage('test',-20)).to.throw(Error)
        expect(()=>payment=new PaymentPackage({},20)).to.throw(Error)
        expect(()=>payment=new PaymentPackage('test',{})).to.throw(Error)

    })
    it('Name should set and get',function () {
       expect(payment.name).to.be.equal('Pesho')
        expect(payment.name = 'Gosho').to.be.equal('Gosho')
        expect(()=>payment.name={}).to.throw(Error)
        expect(()=>payment.name='').to.throw(Error)
    })

    it('Should throw error when setting value to negative',function () {
        expect(()=>payment.value = {}).to.throw(Error)
        expect(()=>payment.value = -10).to.throw(Error)
        expect(payment.value).to.be.equal(20)
        expect(payment.value = 10).to.be.equal(10)
        expect(payment.value = 0).to.be.equal(0)
    })

    it('VAT should throw error on non-negative number',function () {
        expect(()=>payment.VAT = {}).to.throw(Error)
        expect(()=>payment.VAT = '').to.throw(Error)
        expect(()=>payment.VAT = -10).to.throw(Error)
        expect(payment.VAT).to.be.equal(20)
        expect(payment.VAT = 10).to.be.equal(10)
        expect(payment.VAT = 0).to.be.equal(0)
    })

    it('Active status should throw error if null is passed',function () {
       expect(()=>payment.active = null).to.throw(Error)
        expect(()=>payment.active = {}).to.throw(Error)
        expect(()=>payment.active = '').to.throw(Error)
    })

    it('Active status should work for true and false', function () {
            payment.active = true
            expect(payment.active).to.be.equal(true)
            payment.active = false
            expect(payment.active).to.be.equal(false)
    })
    it('toString method',function () {
        payment.active=false
        expect(payment.toString()).to.contain('inactive')
        expect(payment.toString()).to.contain('\n')
    })

})