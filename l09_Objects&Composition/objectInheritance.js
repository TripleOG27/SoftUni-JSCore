function solve(input) {
let commandExecutor = (function () {
    let store = {}
    function create(arr) {
        if(arr.length>2){
            store[arr[0]]=Object.create(store[arr[2]])
        }else {
        store[arr[0]]={}
        }
    }
    function set(arr) {
        store[arr[0]][arr[1]]=arr[2]
    }
    function print(name) {
        let arr1=[]
        for (let key in store[name[0]]) {
            arr1.push(`${key}:${store[name[0]][key]}`)
        }
        console.log(arr1.join(', '))
    }
    return {create,set,print}
}())
    for (let com of input) {
        let args = com.split(' ')
        let command = args.shift()
        commandExecutor[command](args)
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)