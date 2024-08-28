import { createFakeContact } from '../utils/createFakeContact.js';

import getAllContacts from './getAllContacts.js';

import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  const newContacts = await getAllContacts();

  const contacts = Array(number).fill(0).map(createFakeContact);

  newContacts.push(...contacts);
  updateContacts(newContacts);
};

generateContacts(5);
