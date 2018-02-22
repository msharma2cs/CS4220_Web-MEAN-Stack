/**
 * @author Mohit Sharma
 */

 //
 const combineName = (person, keys, newKey) => {
  let newValue = "";
  for ( let key of keys ) {
    newValue += person[key] + " ";
    delete person[key];
  }
  person[newKey] = newValue.slice(0,-1);
  console.log(person);
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

combineName(person, ['first', 'last'], 'name')

// Notice the object also no longer contains the keys first or last
// and they have been combined into the new key called name
// {
//    twitter: '@elonmusk',
//    company: 'Space X',
//    name: 'Elon Musk'
//  }