let person = require("./PersonAndTeacher")
function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(person)
let p = new person('Ivan','mail')
console.log(p.toSpeciesString());