import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TodosCollection } from '../imports/api/TodosCollection.js';

/**
 * Seed default user account
 */
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);
});
