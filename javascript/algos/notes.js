//Quarter of the year
const qtr = (month) => {
    if (month >= 1 && month <= 3) return 1;
    if (month >= 4 && month <= 6) return 2;
    if (month >= 5 && month <= 9) return 3;
    if (month >= 10 && month <= 12) return 4;
};

//Needle in the haystack
function findNeedle (haystack) {
    for (let i=0; i<haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return `found needle at ${i}`
        };
    };
};

//Counting sheep
const countSheep = function(num) {
    if (!num) return '';
    let response = '';

    for (let i=1; i<=num; i++) {
        response += `{i} sheep...`;
    }
    return response;
};

//Convert numbers to reversed array of digits
function digitize(num) {
    const array = num.toString().split('').reverse();
    const result = array.map(item => item*1)
    return result; 
};

//Fake binary
function fakeBin(x) {
    const strArray = x.split('');
    const result = strArray.map(x => {
        if (x<5) return 0;
        if (x>=5) return 1;
    });
        return result.join('');
};

//How good are you really
function betterThanAvg(everyone, you) {
    let avg = null;
    let total = 0;
    for(let i=0; everyone.length; i++) {
        total += everyone[i];
    }
    avg = total/everyone.length;
    return you > avg;
};

    //another way to do ^
function betterThanAvg(x,y) {
    const total = x.reduce(function(prevVal, currVal) {
        return prevVal + currVal;
    }, 0);
    const avg = total/x.length;
    return y > avg;
};

//Twice as old
function twiceAsOld(x,y) {
    const y2 = y*2;
    if(x === y2) return 0;
    if(x>y2) {
        return x-y2;
    } if (x<y2) {
        return y2-x;
    };
};

//Odd or even
function oddOrEven(array) {
    let sum = 0;
    for (let i=0; i <array.length; i++) {
        sum += array[i];
    }
    if(sum % 2 === 0){
        return 'even';
    } return 'odd';
};

//Regex validate pin code
function validatePin(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
};

//Disemvowel trolls
function noVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const _str = str.split('');
    for (let i=0; i<str.length; i++) {
        if (vowels.includes(_str[i].toLowerCase())) {
            _str[i] = '';
        };
    };
    return _str.join('');
};

//Total amount of points
function points(games) {
    let total = 0;
    for (let i=0; i<games.length; i++) {
        const[x,y]= games[i].split(':');
        if(x>y) total += 3;
        if(x<y) total += 0;
        if(x==y) total += 1;
    }
    return total;
};

//Check same case
//need to rewrite code in vs code