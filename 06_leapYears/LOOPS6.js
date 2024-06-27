const leapYears = function(Year) {
    if(Year % 4 == 0 || Year % 400 == 0){
        return `${Year} is a leap year`
    }
        else {
            return (`${Year} is not a leap year`)
        }
};

x = leapYears(1900)
y = leapYears(34992)
console.log(x)
