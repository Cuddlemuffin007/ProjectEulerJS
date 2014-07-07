var sum = 0;
function multiplesSum(num) {
    for (i=0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

multiplesSum(1000);