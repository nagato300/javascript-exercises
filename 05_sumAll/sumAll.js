const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return 'ERROR';
    }

    if (!(typeof n1 === "number" && typeof n2 === "number")) {
        return 'ERROR';
    }

    res = 0;
    if (n2 < n1) {
        let temp = n2;
        n2 = n1;
        n1 = temp;
    }
    for (let i = n1; i <= n2; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
