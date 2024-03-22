var randomBytes = require('randombytes');
const { Random } = require("random-js");
var _ = require("underscore");

const random = new Random(); // uses the nativeMath engine


// Method 1: Bitwise operations for randomness
function bitwiseRandom(max) {
    let seed = new Date().getTime();
    
    seed = (seed * 9301 + 49297) % 233280;
    const randomValue = seed / 233280;

    return Math.floor(randomValue * max) + 1;
}

// Method 2: Cryptographic randomness
function cryptoRandom(max) {
    const buf = randomBytes(4); 
    const randomValue = buf.readUInt32LE(0) / 0xffffffff;

    return Math.floor(randomValue * max) + 1; 
}

// Method 3: Just randomness
function randomJsRandom(min,max) {
    return random.integer(1, 100);
}

// Method 4: underscore randomer
function _randomer(min,max){
    return _.random(min, max);
}

// Main function combining all three methods
function mrng(min,max) {
    const choose = _randomer(1,4);
    // console.log("Choosed: ",choose)
    var random_number = 0;
    switch (choose) {
        case 1:
            random_number = bitwiseRandom(max)
            
            break;

        case 2:
            random_number = cryptoRandom(max)
            break;
        
        case 3:
            random_number = randomJsRandom(min,max)
            break;

        case 4:
            random_number = _randomer(min,max)
            break;
    
        default:
            break;
    }
    return random_number;
}



module.exports = mrng;
