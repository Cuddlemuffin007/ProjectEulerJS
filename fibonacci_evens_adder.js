//This function sums the Fibonacci numbers
//to a point in the sequence
function fibEvensSum1() {
    var fib = [0, 1];
    for (i = 0; i < 10; i++) {
        fib.push(fib[i] + fib[i + 1])
    }
    console.log(fib.filter(function (element) {
        if (element % 2 === 0) return true;
    }).reduce(function (a, b) {
        return a + b;
    }));
}

fibEvensSum();

//This version sums the Fibonacci numbers
//up to a user specified value of the final number
function fibEvensSum2() {
    var fib = [0, 1];
    var i = 0;
    do {
        fib.push(fib[i] + fib[i + 1]);
        i++;
    }
        while (fib[i] < 4000000);
        console.log(fib.filter(function (element) {
            if (element % 2 === 0) return true;
        }).reduce(function (a, b) {
            return a + b;
        }));
    }

    fibSum ();

