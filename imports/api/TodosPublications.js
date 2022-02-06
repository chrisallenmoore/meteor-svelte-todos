import { Meteor } from 'meteor/meteor';
import { TodosCollection } from '/imports/db/TodosCollection';

Meteor.publish('todos', function publishTodos() {
    return TodosCollection.find({ userId: this.userId });
});