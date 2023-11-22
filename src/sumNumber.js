function sumNumberLogN(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function sumNumberLog1(number) {
    function sumNumber(d) {
        const n = Math.floor((number - 1) / d);
        return d * n * (n + 1) / 2;
    }

    return sumNumber(3) + sumNumber(5) - sumNumber(15);
}

module.exports = {
    sumNumberLogN,
    sumNumberLog1,
}
