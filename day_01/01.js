'use strict'

const data = require('./data.json')

const result = data.map(e => {
	return Math.trunc((e / 3) - 2)
}).reduce((acc, cur) => acc + cur, 0)

console.log(result)