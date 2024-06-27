const removeFromArray = function(Array,Pick) {
    for (EachElement in Array){
        if (EachElement == Pick) {
            console.log(`We found a ${Pick}`);
            Array.splice(Pick);
            console.log(Array);
            return Array;
        };
        else {
            console.log(`We cannot find a ${Pick}`)
            continue;
        };
    }
};

Fishes = ["red", "big", "small", "blue", "yellow"]

removeFromArray(Fishes,"yellow")