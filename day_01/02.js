'use strict'

const data = require('./data.json')

const result = data.map(e => {
	const datas = []
	while (e > 8) {
		e = Math.trunc((e / 3) - 2)
		datas.push(e)
	}
	return datas.reduce((acc, cur) => acc + cur, 0)
}).reduce((acc, cur) => acc + cur, 0)

console.log(result)