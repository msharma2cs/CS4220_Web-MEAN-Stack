/**
 * @author Mohit Sharma
 * @description Message Validator - Script to read a remote array of objects consisting of message and signature properties, and 
 *                                  to determine if the message is valid based on the associated signature.
 */

// Simplified HTTP Client (https://github.com/request/request)
const request = require('request');
// The crypto module provides cryptographic functionality (https://nodejs.org/api/crypto.html)
const crypto = require('crypto');
// The fs module provides an API for interacting with the file system (https://nodejs.org/api/fs.html#fs_file_system)
const fs = require('fs');

// HTTP request to URL of remote array of objects.
// It returns the response, post which callback function gets execute in async.
request('http://albertcervantes.com/cs4220/messages.json', (error, response, body) => {

    // Check for any error.
    if ( error ) {
        console.log(`
        Error while getting object from http://albertcervantes.com/cs4220/messages.json :
            ${error}
        `);
    } else {
        // If no error, get the JSON object from body, and
        // validate each message with respective signagture.
        validateMessage( JSON.parse(body), (validResponse) => {
            validResponse.forEach( eachValidResponse => {
                console.log(` ${eachValidResponse.status} - ${eachValidResponse.message}`)
            })
        });
    }
});

// Validates each message's signature against the computed signature, adds to an array.
// Then, uses callback function to print the output.
const validateMessage = ( messageSignatureJson, printResponseCallback ) => {
    let validResponses = [];

    messageSignatureJson.forEach( messageSign => {
        const message = messageSign.message;

        // Load the public key
        const publicKey = fs.readFileSync('./public_key.pem', 'utf8');

        // Get a new Verify object
        const verify = crypto.createVerify('SHA256')

        // Update the verify object with the message we want to verify
        verify.update( message )

        // Determine the validity of the signature for the data and public key.
        const isValidSignature = verify.verify(publicKey, messageSign.signature, 'hex')

        // add to array.
        validResponses.push({
            status: isValidSignature,
            message: message
        }); // pushing into array.
    }); // forEach.
    // display the output.
    printResponseCallback(validResponses);
};