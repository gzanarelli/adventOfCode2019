
const _data = require('./data.json')
const finish = 19690720
let x = []

const brut = () => {
  var startTime = new Date().getTime()
  var elapsedTime = 0
  
  for (let k = 0; k < 100; k++) {
    for (let j = 0; j < 100; j++) {
      const data = _data.slice(0)
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
            x = []
            break
          }
        }
        x.push(data[i])
      }
      if (data[0] === finish) {
        elapsedTime = new Date().getTime() - startTime
        console.log(elapsedTime)
        return (100 * data[1] + data[2])
      }
    }
  }
}
console.log(brut())

const douce = (a, b) => {
  var startTime = new Date().getTime()
  var elapsedTime = 0
  
  // votre code à mesurer ici
  

  let data = _data.slice(0)
  while (data[0] !== finish && (a < 100 || b < 100) ) {
    data = _data.slice(0)
    data.splice(1, 1, a)
    data.splice(2, 1, b)

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
          x = []
          break
        }
      }
      x.push(data[i])
    }
    if (data[0] === finish) {
      elapsedTime = new Date().getTime() - startTime
      console.log(elapsedTime)
      return (100 * data[1] + data[2])
    } else {
      if (a === 99) {
        return douce(0, b + 1)
      }
      return douce(a + 1, b)
    }
  }
}

console.log(douce(0, 0))
