// import { PATH_DB } from '../constants/contacts.js';

// import * as fs from 'node:fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts();
  const newContact = createFakeContact();
  contactList.push(newContact);
  updateContacts(contactList);
};

addOneContact();
