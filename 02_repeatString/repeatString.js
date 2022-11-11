const repeatString = function stringRepeater(string, times) {
    var repeatedString = "";
        if (times >= 0) {
            while (times > 0) {
                repeatedString += string;
                times --;
            }
            return repeatedString;
        } else {
            let repeatedString = "ERROR";
            return repeatedString;
        }
}

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("", 5);



// Do not edit below this line
module.exports = repeatString;
