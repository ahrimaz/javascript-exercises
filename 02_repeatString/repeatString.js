const repeatString = function stringRepeater(string, times) {
    if (times < 0) return "ERROR";
    let word = "";
    for (let x =0; x < times; x++) {
        word += string;
    }
    return word;
};


repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("", 5);



// Do not edit below this line
module.exports = repeatString;
