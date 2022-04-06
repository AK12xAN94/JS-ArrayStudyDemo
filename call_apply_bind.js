const name = 'jimmy'
let obj = {
    name: 'james',
    sex: 0
} 
function foo() {
    console.log(this.name)
    return 'success'
}
foo()
foo.call(sex)
console.log(foo.call(obj))