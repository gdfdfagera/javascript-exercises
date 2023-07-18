const repeatString = function(word, times) {
    if (times < 0){
        return "ERROR";
    }
    var w = '';
    for (var i = 0; i < times; i++){
        w += word;
    }

    return w;
};

// Do not edit below this line
module.exports = repeatString;
