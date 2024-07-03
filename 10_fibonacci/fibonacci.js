const fibonacci = function(x) {
    let before = 1;
    let current = 0;
    let after = 0;
    if (x == 1 || x == 0){
        return 0;
    }
    for (let i = 0; i < x; i++){
        current = after;
        after = before + after;
        before = current;

    }
    return after;
};

console.log(fibonacci())


// Do not edit below this line
module.exports = fibonacci;
