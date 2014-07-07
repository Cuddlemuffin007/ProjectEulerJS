//test for primes
function isPrime(num) {
    if(num < 2) return false;
    for(var i = 2; i < num; i++) {
        if (num % i == 0) 
            return false;
    }
    return true;
        }
//finds all primes up to input num
//don't use for big numbers 
function allPrimes(num) {
for(var i=0; i < num; i++) {
    if(isPrime(i))
console.log(i);
}
}

allPrimes();