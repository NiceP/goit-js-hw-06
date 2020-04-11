
"use strict"

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    return users.filter(value => value.friends.includes(friendName))
    .map(value => value.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]