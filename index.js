// Old 
function tripleAndFilter(arr) {
	return arr.map(function (value) {
		return value * 3;
	}).filter(function (value) {
		return value % 5 === 0;
	})
}
// ES2015 
function tripleAndFilter(arr) {
	return arr.map(val => val * 3).filter(val => val % 5 === 0);
}



// Old 
function doubleOddNumbers(arr) {
	return arr.filter(function (val) {
		return val % 2 !== 0;
	}).map(function (val) {
		return val * 2;
	})
}

// ES2015
function doubleOddNumbers(arr) {
	return arr
		.filter(val => val % 2 !== 0)
		.map(val  => val*2)
}


// Old 
function mapFilterAndReduce(arr) {
	return arr.map(function (val) {
		return val.firstName
	}).filter(function (val) {
		return val.length < 5;
	}).reduce(function (acc, next) {
		acc[next] = next.length
		return acc;
	}, {})
}
// ES2015
function mapFilterAndReduce(arr) {
	return arr
		.map(val => val.firstName)
		.filter(val => val.length < 5)
		.reduce(acc, next => {
			acc[next] = next.length
			return acc;
		}, {});
}
// Old
var instructor = {
	firstName: "Colt",
	sayHi: function () {
		setTimeout(function () {
			console.log('Hello ' + this.firstName)
		}, 1000)
	}
}
// ES2015
var instructor = {
	firstName: "Colt",
	sayHi: function () {
		setTimeout(() => {
			console.log('Hello ' + this.firstName)
		}, 1000)
	}
}

/* Guess the password */

