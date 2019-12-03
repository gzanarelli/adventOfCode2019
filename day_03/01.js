'use strict'

const data = require('./data.json')

const data1 = data[0]
const data2 = data[1]
let x = 0
let y = 0

const path = []
data1.map(e => {
  const letter = e.slice(0, 1)
  const distance = parseInt(e.slice(1))
  if (letter === 'R' || letter === 'L') {
    if (letter === 'R') {
      x += distance
      path.push({ x: x, y: y })
    } else {
      x -= distance
      path.push({ x: x, y: y })
    }
  } else {
    if (letter === 'U') {
      y += distance
      path.push({ x: x, y: y })
    } else {
      y -= distance
      path.push({ x: x, y: y })
    }
  }
})

const path2 = []
x = 0
y = 0
data2.map(e => {
  const letter = e.slice(0, 1)
  const distance = parseInt(e.slice(1))
  if (letter === 'R' || letter === 'L') {
    if (letter === 'R') {
      x += distance
      path2.push({ x: x, y: y })
    } else {
      x -= distance
      path2.push({ x: x, y: y })
    }
  } else {
    if (letter === 'U') {
      y += distance
      path2.push({ x: x, y: y })
    } else {
      y -= distance
      path2.push({ x: x, y: y })
    }
  }
})

// console.log(path)
// console.log(path2)
const tab = []
for (let i = 0; i < path.length; i++) {
  for (let j = 0; j < path2.length; j++) {
    if (((path[i].x > path2[j].x && path[i > 0 ? i - 1 : 0].x < path2[j > 0 ? j - 1 : 0].x) && (path[i].y > path2[j].y && path[i > 0 ? i - 1 : 0].y < path2[j > 0 ? j - 1 : 0].y)) ||
    ((path[i].x < path2[j].x && path[i > 0 ? i - 1 : 0].x > path2[j > 0 ? j - 1 : 0].x) && (path[i].y < path2[j].y && path[i > 0 ? i - 1 : 0].y > path2[j > 0 ? j - 1 : 0].y)) ||
    ((path[i].x > path2[j].x && path[i > 0 ? i - 1 : 0].x < path2[j > 0 ? j - 1 : 0].x) && (path[i].y < path2[j].y && path[i > 0 ? i - 1 : 0].y > path2[j > 0 ? j - 1 : 0].y)) ||
    ((path[i].x < path2[j].x && path[i > 0 ? i - 1 : 0].x > path2[j > 0 ? j - 1 : 0].x) && (path[i].y > path2[j].y && path[i > 0 ? i - 1 : 0].y < path2[j > 0 ? j - 1 : 0].y))
    ) {
      tab.push(path[i], path2[j])
    //   console.log(path[i], path2[j])
    }
  }
}

console.log(tab)
