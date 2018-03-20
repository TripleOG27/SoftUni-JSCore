class PaymentProcessor{
    constructor(options ={}){
        this.types = options['types']?options['types']:['service','product','other']
        this.precision = options['precision']? options['precision']:2
        this.payments = new Map()
        this.balance=0
    }
    registerPayment(id,name,type,value){
        if(!id||!name||!type||!value){
            throw new Error()
        }
        if(this.payments.has(id)){
            throw new Error()
        }
        if(name.length===0){
            throw new Error()
        }
        if(!this.types.includes(type)){
            throw new Error()
        }
        if(isNaN(Number(value))){
            throw new Error()
        }
        this.payments.set(id,{id:id,name:name,type:type,value:value})
        this.balance+=value
    }
    deletePayment(id){
        let found,target
        if(!this.payments.has(id)) {
            throw new Error()
        }
        this.balance-=this.payments.get(id)['value']

        this.payments.delete(id)

    }
    get(id){
        if(!this.payments.has(id)){
            throw new Error()
        }
        return `Details about payment ID: ${this.payments.get(id)['id']}
- Name: ${this.payments.get(id)['name']}
- Type: ${this.payments.get(id)['type']}
- Value: ${this.payments.get(id)['value']}`
    }
    setOptions(options){
    this.types = options['types']?options['types']:this.types
        this.precision = options['precision']? options['precision']:this.precision
    }
    toString(){
    return `Summary:
- Payments: ${this.payments.size}
- Balance: ${+(this.balance.toFixed(this.precision))}`
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
 generalPayments.registerPayment('001A', 'Microchips', 'service', 15000);
 //= {types:['service','product','other'],precision: 2}
// generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
// console.log(generalPayments.toString());
// // Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
// // Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// generalPayments.get('E027');
// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());
// Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
// Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());

