/**
 * @author Mohit Sharma
 */

// Using object destructuring in function argument,
const displayName = ({first, last}) => {
  // then displaying it using template string.
  const displayString = `${first} ${last}`;
  console.log(displayString);
}

// Example person object.
const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

// Display the full name of the person.
displayName(person)  // Elon Musk