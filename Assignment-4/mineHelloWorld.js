/**
 * @author Mohit Sharma
 * @description Script to mine 'CS4220 Hello, World! Coin', that hashes to an output with three leading zeroes.
 */

// The crypto module provides cryptographic functionality (https://nodejs.org/api/crypto.html)
const crypto = require('crypto')

/**
 * Function to mine the coin using SHA256 hashing algorithm.
 * @param {The begining value of nonce. It increments with each hashing attempt.} nonce 
 * @param {Function to print the output.} printDigestCallback 
 */
const helloWorlCoinMining = ( nonce, printDigestCallback) => {
    // regex to match digest that has exactly 3 leading 0s.
    const re = new RegExp('^000.+');
    // setting upper cap on loop execution.
    const MAX_LIMIT = nonce + 999999;
    // error to report if failed to mine coin with limit.
    let error = `Failed to mine the coin with nonce value reaching ${MAX_LIMIT}`,
        // to pass message and digest to print function, if found.
        message = '',
        digest = '';

    while ( nonce < MAX_LIMIT ) {
        message = 'Hello, World!' + nonce;
        digest = crypto.createHash('sha256').update( message, 'utf8').digest('hex');
        if ( digest.match(re) ) {
            error = null;
            break;
        }
        nonce++;
    }
    printDigestCallback( error, message, digest);
};

helloWorlCoinMining( 1, ( error, message, digest) => {
    // if error in mining the coin,
    if ( error ) {
        console.log('[Error]: ', error)
    } else {
        // output the mined string with hash digest.
        console.log(`The 'SHA-256' digest of '${message}' is: ${digest}`);
    }
});