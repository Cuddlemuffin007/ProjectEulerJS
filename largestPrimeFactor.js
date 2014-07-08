//my solution to project euler problem #3
//unfortunately it was too inefficient to solve the actual
//problem but it can handle smaller numbers
//I'm keeping it because although it ultimately failed
//I'm proud of it because for the first time I could
//write some code without having to look up parts on
//the internet. Here's to even better coding to come!

//Prime test

function isPrime(num) {
	if(num < 2) return false;
	for(var i = 2; i < num; i++) {
	if(num % i === 0)
		return false;
	}
	return true;
}

//Largest prime factor of number

function largestPrimeFactor(num) {
	for(i = num; i > 0; i--) {
		if(isPrime(num)) {
			return num;
		}
		else if(num % i === 0) {
			if(isPrime(num)) {
				return i;
			}
		}
	}
}

largestPrimeFactor(); 