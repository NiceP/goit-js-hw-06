"use strict"

import users from './users.js';

const getSortedUniqueSkills = users => {
    return users
    .reduce((totalSkills, user) => {
        totalSkills.push(...user.skills);
        return totalSkills;
      }, [])
      .filter((value, index, user) => user.indexOf(value) === index)
      .sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]