/**
 * @author Mohit Sharma
 */

 // combines multiple keys into one.
 const combineName = (person, keys, newKey) => {
  let newValue = "";
  for ( let key of keys ) {
    newValue += person[key] + " ";
    // removes the key from object.
    delete person[key];
  }
  // adds new key.
  person[newKey] = newValue.slice(0,-1);
  console.log(person);
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

combineName(person, ['first', 'last'], 'name');