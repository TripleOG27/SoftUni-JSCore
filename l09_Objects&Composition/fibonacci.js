function getFibonator() {
let first=0
    let second=1
    return function () {
        let next = first+second
        first=second
        second=next
        console.log(first)
    }
}
let fib = getFibonator()
fib()
fib()
fib()
fib()
fib()
fib()