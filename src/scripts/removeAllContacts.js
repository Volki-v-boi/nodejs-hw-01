import { PATH_DB } from '../constants/contacts.js';

import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const updateContacts = async (contacts) => {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  };
  await updateContacts([]);
};

removeAllContacts();
