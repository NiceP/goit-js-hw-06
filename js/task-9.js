"use strict"

import users from './users.js';
// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
const getNamesSortedByFriendsCount = users => {
    return users 
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(value => value.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]