import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');

// Без использования React Toolkit
// import { v4 as uuidv4 } from 'uuid';

// import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './contacts-types';

// export const addContact = data => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE_CONTACT,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: FILTER,
//   payload: value,
// });

// Динамика
// export const myAction = value => ({
//     type: 'MY_ACTION',
//     payload: value,
// });

// Статика
// export const myAction2 = {
//     type: 'MY_ACTION2',
//     payload: 'super payload2',
// }
