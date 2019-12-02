'use strict'

const data = require('./data.json')
let x = []

for (let i = 0; i < data.length + 1; i++) {
  if (i % 4 === 0 && i !== 0) {
    let tt = 0
    if (x[0] === 1) {
      tt = data[x[1]] + data[x[2]]
      data.splice([x[3]], 1, tt)
      x = []
    } else if (x[0] === 2) {
      tt = data[x[1]] * data[x[2]]
      data.splice(data[x[3]], 1, tt)
      x = []
    } else {
      break
    }
  }
  x.push(data[i])
}

console.log(data.join(','))
