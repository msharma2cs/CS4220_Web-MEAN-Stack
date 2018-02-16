/*
 * Assignment 1 - 
 *  Question 1 - String Manipulation.
 * @author : Mohit Sharma.
 */

/*
 * This JavaScript implements following 7 functions:
 *      1.upperCase()
 *      2.lowerCase()
 *      3.sentenceCase()
 *      4.capitalizedCase()
 *      5.alternatingCase()
 *      6.titleCase()
 *      7.inverseCase()
 * 
 * It contains runStringFunctions() to invoke the implemented functions, and to display generated test output for grading purpose.
 */

/*
 * This function takes a single string and returns a copy of the string with all alphabets converted to uppercase characters.
 */
let upperCase = (str) => {
    let result = "";
    
    // for every character of the string,
    for ( let char of str ) {
        // check the ASCII code of the character.
        // If it lies between 97 and 122 inclusive, then it is a lowercase character.
        // Subtract 32 from ASCII value, for corresponding uppercase value lies between 65 and 90 inclusive.
        // use fromCharCode to get character from ASCII value.
        result += ( char.charCodeAt() > 96 && char.charCodeAt() < 123 ) ? String.fromCharCode(char.charCodeAt() - 32) : char;
    }
    
    return result;
}

/*
 * This function takes a single string and returns a copy of the string with all alphabets converted to lowercase characters.
 */
let lowerCase = (str) => {
    let result = "";
    
    // for every character of the string,
    for ( let char of str ) {
        // check the ASCII code of the character.
        // If it lies between 65 and 90 inclusive, then it is an uppercase character.
        // Add 32 to ASCII value, for corresponding uppercase value lies between 97 and 122 inclusive.
        // use fromCharCode to get character from ASCII value.
        result += ( char.charCodeAt() > 64 && char.charCodeAt() < 91 ) ? String.fromCharCode(char.charCodeAt() + 32) : char;
    }
    
    return result;
}

/*
 * This function takes two arguments:
 *      1. a single string (str), and
 *      2. an array of strings (unconditionallyCapitalized[]).
 * 
 * This function returns a copy of str with the first letter of the first word capitalized, 
 * and all other words lower case, 
 * except for words that are unconditionally capitalized, such as proper nouns and "I". 
 * The unconditionallyCapitalized array contains all words that should be unconditionally capitalized.
 */
let sentenceCase = (str, unconditionallyCapitalized) => {
    // expression style function to capitalized first letter of the string passed.
    let capitalized = (word) => upperCase(word.charAt(0)) + word.slice(1);

    // convert all words of passed 'unconditionallyCapitalized' array to lowercase using above implemented function.
    // map() accepts a function, and executes that function on every element of the array.
    let unconditionallyCapitalizedLowered = unconditionallyCapitalized.map(lowerCase);
    
    // convert the passed string to lowercase using above implemented method,
    // and split on "." to separate sentences.
    let sentences = lowerCase(str).split('.');

    let result = "";

    // for every sentence of the string,
    for ( let sentence of sentences ) {
        
        // trim void spaces and split on " " to get words.
        let words = sentence.trim().split(" ");
        
        //capitalize first word of each sentence using above expression style function.
        result += capitalized(words[0]);
        
        // for all words starting from second word,
        for ( let position = 1; position < words.length; position++ ) {
            // check if it is in passed array:
            // do unconditional capitalization if it is array,
            // else use the lowercased word.
            result += ( unconditionallyCapitalizedLowered.indexOf(words[position]) > -1 ) ? (" " + capitalized(words[position])) : (" " + words[position]);
        }
        
        // add "." after each sentence, and " " before starting of next sentence.
        result += ". ";
    }

    // slice off last two part of result string, which would be additional ". " added in above loop.
    return result.slice(0,-2);
}

/*
 * This function takes a single string and returns a copy of the string with the first character of each word converted to uppercase.
 */
let capitalizedCase = (str) => {
    
    // expression style function to capitalized first letter of the string passed.
    let capitalized = (word) => upperCase(word.charAt(0)) + word.slice(1);
    
    // convert string to lowercase and split on " " to get words.
    let words = lowerCase(str).split(" ");
    
    // convert all words to first-letter-capitalized using above implemented capitalized() function.
    // map() accepts a function, and executes that function on every element of the array.
    let result = words.map(capitalized);
    
    // join converted words with " " in between and return resultant string.
    return result.join(" ");
}

/*
 * This function takes a single string and returns a copy of the string comprised of characters that alternate between lower and uppercase.
 */
let alternatingCase = (str) => {
    
    // lower = true -> indicates that first letter will be lowercased.
    let result = "", lower = true;
    
    // for every character of the string,
    for ( let char of str ) {
        // check boolean variable 'lower' -
        //      if true -> convert to lowercase using implemented function.
        //      if false -> convert to uppercase using implemented function.
        result += lower ? lowerCase(char) : upperCase(char);
    
        // negate boolean value 'lower' every iteration to have alternating effect.
        lower = !lower;
    }
    return result;
}

let titleCase = (str, lowercaseWords) => {
   
    // expression style function to capitalized first letter of the string passed.
    let capitalized = (word) => upperCase(word.charAt(0)) + word.slice(1);

    // convert all words of passed 'lowercaseWords' array to lowercase using above implemented function.
    // map() accepts a function, and executes that function on every element of the array.
    let lowercaseWordsLowered = lowercaseWords.map(lowerCase);
   
    // convert the passed string to lowercase using above implemented method,
    // and split on "." to separate sentences.
    let sentences = lowerCase(str).split(".");

    let result = "";

    // for every sentence of the string,
    for ( let sentence of sentences ) {
   
        // trim void spaces and split on " " to get words.
        let words = sentence.trim().split(" ");
   
        //capitalize first word of each sentence using above expression style function.
        result += capitalized(words[0]);
   
        // for all words starting from second word,
        for ( let position = 1; position < words.length; position++ ) {
            // check if it is in passed array:
            // use lowercased if it is in array,
            // else convert to the capitalized word.
            result += ( lowercaseWordsLowered.indexOf(words[position]) > -1 ) ? (" " + words[position]) : (" " + capitalized(words[position]));
        }
   
        // add "." after each sentence, and " " before starting of next sentence.
        result += ". ";
    }
   
    // slice off last two part of result string, which would be additional ". " added in above loop.
    return result.slice(0,-2);
}

/*
 * This function takes a single string and returns a copy of the string with the first letter of each word lowercased, and all other letters in the word uppercased.
 */
let inverseCase = (str) => {
   
    // expression style function to lowercase first letter and capitalize all other letters of the string passed.
    let inverseCapitalized = (word) => lowerCase(word.charAt(0)) + word.slice(1);
   
    // convert string to uppercase and split on " " to get words.
    let words = upperCase(str).split(" ");
   
    // convert all words to first-letter-lowercased using above implemented inverseCapitalized() function.
    // map() accepts a function, and executes that function on every element of the array.
    let result = words.map(inverseCapitalized);
   
    // join converted words with " " in between and return resultant string.
    return result.join(" ");
}

/*
 * The output of this function is used to generate the output and grade the assignment.
 */
function runStringFunctions(){
    // test string.
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.';

    // two arrays required for couple of functions, based on mentioned string.
    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow'];
    let lowercaseWords = ['the', 'of', 'in', 'an'];

    // calls to each function, and output printed on console.
    console.log( 'upperCase: ', upperCase(str) );
    console.log( 'lowerCase: ', lowerCase(str) );
    console.log( 'sentenceCase: ', sentenceCase(str, unconditionallyCapitalized) );
    console.log( 'capitalizedCase: ', capitalizedCase(str) );
    console.log( 'alternatingCase: ', alternatingCase(str) );
    console.log( 'titleCase: ', titleCase(str, lowercaseWords) );
    console.log( 'inverseCase: ', inverseCase(str) );
}

runStringFunctions();