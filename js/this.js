const helloWorld =  {
    name: 'Alex',
    getName: function () {
        console.log(this)
    }
}
helloWorld.getName()

function test() {
    return this;
}
test()

const {name: yName} = { name: 'Lida'}

console.log()