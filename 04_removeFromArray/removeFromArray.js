/* 
///this is the stupid way

const removeFromArray = function (...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};
*/
///this is easier way

///defines removeFromArray with the paramters `array`
///and `removeShit
function removeFromArray(array,removeShit) { 
    ///filters down the array for whatever `thing` is
    return array.filter((thing) => { 
    ///starts removing shit that thing matches and returns
        return !removeShit.includes(thing);
    }); 
};

removeFromArray([1, 2, 3, 4], [3]);
console.log(removeFromArray([1, 2, 3, 4], [3]));
/*
removeFromArray([1, 2, 3, 4], [3], [2]);
removeFromArray([1, 2, 3, 4], [7, "tacos"]);
removeFromArray([1, 2, 3, 4], [7, 2]);
removeFromArray([1, 2, 3, 4], [1, 2, 3, 4]);
removeFromArray(["hey", 2, 3, "ho"], ["hey", 3]);
removeFromArray([1, 2, 3], ["1", 3]);
*/

// Do not edit below this line
module.exports = removeFromArray;
