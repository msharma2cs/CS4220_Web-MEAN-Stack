/*
 * Assignment 1 - 
 *  Question 2 - Objects.
 * @author : Mohit Sharma.
 */
 
/*
 * This JavaScript implements following two functions:
 *     1.getCharacterFrequency()
 *     2.printCharacterFrequency()
 * 
 * It contains runCharacterFunctions() to invoke the implemented functions, and to display generated test output for grading purpose.
 */

/*
 * This function takes a single string (str) argument and returns an object.
 *      The object's properties is the unique letters present in str.
 *      The value of each property is the frequency of each character present in the string.
 * NOTE: Uppercase and Lowercase letters are grouped in the same count. 
 *       For example, the word Babble would result 'B' with count 3.
 */
const getCharacterFrequency = (str) => {
    // frequency object to be returned, empty now.
    let frequency = {};
    
    for ( let i = 0; i < str.length; i++ ) {
        let character = str.charAt(i);

        // checks if character is an alphabet.
        // if yes, covers both scenarios - for uppercase and lowercase
        // and, respectively increments count or adds new property.
        if ( (character.charCodeAt() > 96 && character.charCodeAt() < 123) || (character.charCodeAt() > 64 && character.charCodeAt() < 91) ) {
            if ( frequency[character] ) {
                frequency[character]++;
            } else if ( frequency[character.toLowerCase()] ) {
                frequency[character.toLowerCase()]++;
            } else if ( frequency[character.toUpperCase()] ) {
                frequency[character.toUpperCase()]++;
            } else {
                frequency[character] = 1;
            }
        } else { // counts for letters other than objects.
            if ( frequency[character] ) {
                // increment property's value if present,
                frequency[character]++;
            } else {
                // else create a new property.
                frequency[character] = 1;
            }
        } 
    }
    return frequency;
}

/*
 * This function takes a single object of the type returned by getCharacterFrequency(),
 * and displays each character and it's corresponding frequency.
 * Each character is surrounded by quotation marks '', and accounts for singular and plural values.
 */
const printCharacterFrequency = (frequencyObj) => {
    // iterates over each key in the passed object.
    for ( let key in frequencyObj ) {
        // if count for a property is greater than 1, uses 'times', else uses 'time'.
        let time = ( Number(frequencyObj[key]) > 1 ) ? "times" : "time";
        console.log("\'" + key + "\'" + " occurs " + frequencyObj[key] + " " + time + ".");
    }
}

/*
 * The output of this function is used to generate output and grading assignment.
 */
function runCharacterFunctions(){

    let str = 'Hello, World!'
    
    let frequencyObj = getCharacterFrequency( str )
    
    printCharacterFrequency( frequencyObj )
}

runCharacterFunctions();