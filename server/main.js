import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TodosCollection } from '../imports/db/TodosCollection.js';
import '../imports/api/TodosMethods.js';
import '/imports/api/TodosPublications';
/**
 * Seed default user account
 */
//const SEED_USERNAME = 'meteorite';
//const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  // code to run on server at startup
  /*if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }*/

  //const user = Accounts.findUserByUsername(SEED_USERNAME);
});
