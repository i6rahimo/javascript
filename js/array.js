const a = [1, 2, 3, 4]
const b = ['Audi', 'Bmw', 'aliexpress', 'twitter', 'facebook']

const c = a.concat(b)
const last = c.pop()
const first = c.shift()
c.push('123')
const last2 = c.pop()
console.log(c)
const index = a.indexOf(1)
console.log(index)

const rm = b.splice(0, 5)
console.log(rm)

const copy = a.splice()
console.log(copy)

const rev = a.reverse()
console.log(rev)
