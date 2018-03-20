function solve(arr) {
    let closure = (function () {
        let str = ''
        return {
            append: (val) => str += val,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        }
    })()

        for (let obj of arr) {
            let [command,value]=obj.split(' ')
            closure[command](value)
        }

}
solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)