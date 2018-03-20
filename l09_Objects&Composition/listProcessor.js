function solve(arr) {
    let commandexecutor = (function () {
        let arr1 = []
        function add(string) {
            arr1.push(string)
        }
        function remove(str) {
            arr1=arr1.filter(w=>w!==str)
        }
        function print() {
            console.log(arr1.join(','))
        }
        return {add,remove,print}
    }())
    for (let str of arr) {
        let [command,value]=str.split(' ')
        commandexecutor[command](value)
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])