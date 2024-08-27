import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

import getAllContacts from './getAllContacts.js';

const generateContacts = async (number) => {
  const newContacts = await getAllContacts();

  const contacts = Array(number).fill(0).map(createFakeContact);

  newContacts.push(...contacts);
  await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
};

generateContacts(5);
