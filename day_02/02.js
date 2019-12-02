
const data = require('./data.json')

const finish = 19690720
let x = []

for (let k = 0; k < 100; k++) {
  for (let j = 0; j < 100; j++) {
    data.splice(1, 1, k)
    data.splice(2, 1, j)
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
          if (data[1] * 100 + data[2] === finish) {
            console.log(data[1], data[2])
          }
          break
        }
      }
      x.push(data[i])
    }
  }
}
