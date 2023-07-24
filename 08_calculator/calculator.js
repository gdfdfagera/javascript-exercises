const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...a]) {
  let t = 0;
	a.forEach(c => {
    t += c;
  });
  return c;
};

const multiply = function([...a]) {
  let t = 1;
	a.forEach(c => {
    t *= c;
  });
  return c;
};

const power = function(a, b) {
  let t = 1;
	for (let i = 0; i < b; i++){
    t *= a;
  }
  return t;
};

const factorial = function(a) {
	if (a == 0){
    return 1;
  }

  let t = 1;
  for (let i = 1; i <= a; i++){
    t *= i;
  }
  return t;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
