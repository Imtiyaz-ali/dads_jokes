# MRNG-Mathematical-Random-Number-Generator-

MRNG is a Node.js module that provides a mathematical approach to generating random numbers. Unlike traditional random number generators that rely on external factors such as system entropy or external libraries, MRNG uses advanced mathematical calculations to produce random numbers within a specified range.

## Features

Enhanced Randomness: Utilizes multiple methods for generating random numbers, including bitwise operations, cryptographic functions, and the random-js library.

Cryptographic Randomness: Incorporates cryptographic randomness using the randombytes module to ensure a high level of unpredictability.

Ease of Use: Provides a simple API for generating random numbers, allowing developers to easily integrate randomness into their applications.

Customizable: Offers flexibility with customizable options for fine-tuning randomness generation according to specific requirements.
Usage:

## Installation
You can install MRNG via [`npm`](https://www.npmjs.com/package/mrng):
```sh
npm install mrng
```

## Usage
    const mrng = require('mrng');

    // Generate a random number
    const randomNumber = mrng();
    console.log(randomNumber); // Output will be a random number

## Methods
MRNG offers three main methods for generating random numbers:

- Bitwise Randomness: Uses bitwise operations for generating randomness based on the current timestamp.
- Cryptographic Randomness: Utilizes cryptographic randomness provided by the randombytes module for enhanced unpredictability.
- Random-JS Library: Incorporates randomness from the random-js library to offer a high-quality random number generation solution.

## License
The MIT License (MIT).

See the LICENSE file in this project for more details.



