const reverseString = function(string) {
    var a = [...string];
    var t = '';
    for (var i = 0; i < string.length; i++){
        t += a[string.length - i - 1];
    }

    return t;
};

// Do not edit below this line
module.exports = reverseString;
