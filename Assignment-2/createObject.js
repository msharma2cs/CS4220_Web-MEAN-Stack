/**
 * @author Mohit Sharma
 */

 // creates an object from the array of key-value pairs provided.
 const createObject = (people) => {
  let peopleObject = {};
  let index = 1;
  
  for ( let eachPerson of people ) {
    let valueObject = {};
    for ( let eachPropertyOfPerson of eachPerson ) {
      valueObject[eachPropertyOfPerson.key] = eachPropertyOfPerson.value;
    }
    peopleObject[`${index}`] = valueObject;
    index += 1;
  }
  console.log(peopleObject)
}

const people = [[{
    key: 'name',
    value: 'Elon Musk'
}, {
    key: 'twitter',
    value: '@elonmusk'
}, {
    key: 'company',
    value: 'Space X'
}],
[{
    key: 'name',
    value: 'Tim Cook'
}, {
    key: 'twitter',
    value: '@tim_cook'
}, {
    key: 'company',
    value: 'Apple'
}]]

createObject(people);