Using the JavaScript language, have the function PrimeTime(num) take the num parameter 
being passed and return the string true if the parameter is a prime number, otherwise return 
the string false. The range will be between 1 and 2^16. 

var primeTime = function (num) {
	var result;
  for (var i = 2; i < num - 1; i++) {
  	if (num % i === 0) {
  		return false;
  	} 
  }
  return true;
};

primeTime();