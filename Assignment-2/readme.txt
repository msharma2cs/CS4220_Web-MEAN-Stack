##### Week 3 Homework #####

-----------
To execute:
-----------
    node [filename].js

    [Note]:
    1. This produces default output mentioned here. Change values for different outputs.
    2. All scripts conforms to ES6 syntax.

----------
Question 1:
----------
    Required:   A class that keeps track of groups and group members. The class track names of the groups, a group leader and group members.
                Each group should look like:
                    `{
                        name: 'Group Name'
                        leader: 'Leader Name'
                        members: ['Name 1', Name 2']
                    }`

                The class has following methods:
                    - constructor: accepts an array of group objects or if nothing is passed - defaults to an empty array.
                    - addGroup(group): adds a group.
                    - removeGroup(groupName): removes a group by the name of the group.
                    - addMember(groupName, memberName): adds a member to the specified group.
                    - removeMember(groupName, memberName): removes a member from the specified group.
                    - print: prints the groups as formatted.

----------
Question 2:
----------
    Required:   A function that takes an object as an argument and prints the person's first and last name, 
                using object destructuring in function argument and template strings while printing.
    
    Example:
                const person = {
                    first: 'Elon',
                    last: 'Musk',
                    twitter: '@elonmusk',
                    company: 'Space X'
                }
                displayName(person)  
                
                Output: 
                Elon Musk

----------
Question 3:
----------
    Required:   A function that takes an object, array of keys to combine and a destination key.
                It returns an object with the correct keys combined.
    
    Example:
                const person = {
                    first: 'Elon',
                    last: 'Musk',
                    twitter: '@elonmusk',
                    company: 'Space X'
                }
                combineName(person, ['first', 'last'], 'name')

                Output :
                // The object no longer contains the keys first or last, and
                // they have been combined into the new key called name.
                {
                    twitter: '@elonmusk',
                    company: 'Space X',
                    name: 'Elon Musk'
                }

----------
Question 4:
----------
    Required:   A function that takes an array as an argument and creates an object.

    Example:
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

                Output:
                    {
                        '1': { name: 'Elon Musk', twitter: '@elonmusk', company: 'Space X' },
                        '2': { name: 'Tim Cook', twitter: '@tim_cook', company: 'Apple' }
                    }

--------------------------------------------------------------------------------------------------------------                    