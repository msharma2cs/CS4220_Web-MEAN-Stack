/**
 * @author Mohit Sharma.
 * Groups class to represent a list of groups.
 * Each group has a name, a leader, and a list of members.
 */
class Groups {
  
  // If no argument is provided, then defaults to an empty array.
  // Else stores the passed array of groups object into class variable list.
  constructor(list = []) {
    this.list = list;
  }
  
  // Adds a new group to the list.
  addGroup({name, leader, members}) {
    // Push group details into list.
    this.list.push({name, leader, members});
  }
  
  // Removes the group (whose name is passed) from the list.
  removeGroup( groupName) {
    // Get the index of the group object in the list.
    const groupIndex = this.list.findIndex( item => {
      return item.name.toLowerCase() === groupName.toLowerCase();
    })
    // Delete 1 object from the list at index retrieved.
    this.list.splice(groupIndex, 1);
  }
  
  // Adds a new member to the specified group.
  addMember(groupName, memberName) {
    // Get the group object whose name matches the group name passed.
    const groupFound = this.list.find( item => {
      return item.name.toLowerCase() === groupName.toLowerCase();
    })
    // Add the new member in the members list of the group object.
    groupFound.members.push(memberName);
  }
  
  // Removes the member from the members list of specified group.
  removeMember(groupName, memberName) {
    // Get the group object whose name matches the group name passed.
    const groupFound = this.list.find( item => {
      return item.name.toLowerCase() === groupName.toLowerCase();
    })
    // Get the index from members list of retrieved group object, for the member name specified.
    const memberIndex = groupFound.members.findIndex( item => {
     return item.toLowerCase() === memberName.toLowerCase(); 
    })
    // Delete 1 member from members list of specified group, at the index retrieved.
    groupFound.members.splice(memberIndex, 1);
  }
  
  // Prints the output to console using template string.
  get print() {
    // print for each group in the list.
    this.list.forEach( item => {
      console.log(`${item.name}\n` + 
                  `Leader: ${item.leader}\n` + 
                  `${item.members.join(' | ')}\n`
                )
    })
  }
  
} // end of Groups class.

// create a Groups object.
const groups = new Groups()
// add 2 groups to the list, and
groups.addGroup({
  name: 'Justice League',
  leader: 'Wonder Woman',
  members: ['Batman', 'Superman', 'Spiderman']
})
groups.addGroup({
  name: 'Avengers',
  leader: 'Iron Man',
  members: ['Hulk', 'Thor', 'Captain America']
})
// display the current list, and
groups.print
// finally display partition.
console.log(`Created Groups object and add 2 groups to the list.\n` + 
            `---------------------------------------------------\n`);

groups.addMember('Justice League', 'Aqua Man')
// display the current list, and
groups.print
// finally display partition.
console.log(`Added Member 'Aqua Man' to the members list of 'Justice League' group.\n` + 
            `----------------------------------------------------------------------\n`);

groups.removeGroup('avengers')
// display the current list, and
groups.print
// finally display partition.
console.log(`Removed group named 'Avengers' from the groups list.\n` + 
            `----------------------------------------------------\n`);

groups.removeMember('Justice League', 'spiderMan')
// display the current list, and
groups.print
// finally display partition.
console.log(`Removed member 'spiderMan' from the members list of specified group 'Justice League'.\n` + 
            `-------------------------------------------------------------------------------------\n`);