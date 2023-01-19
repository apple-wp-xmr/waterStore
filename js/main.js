/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numbers = []
    s.split('').forEach((s) => convertToNumber(s))
};

let convertToNumber= function(n){
    if(n == I){
        return 1
    }
        if(n == 'I'){
        return 1
    }
        if(n == 'V'){
        return 5
    }
        if(n == 'X'){
        return 10
    }
        if(n == 'L'){
        return 50
    }
        if(n == 'C'){
        return 100
    }
        if(n == 'D'){
        return 500
    }
        if(n == 'M'){
        return 1000
    }
    throw new Error('Parameter not found!');
}

romanToInt("LVIII")