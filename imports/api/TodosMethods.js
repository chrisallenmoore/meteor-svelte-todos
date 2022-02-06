import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TodosCollection } from '../db/TodosCollection.js';

Meteor.methods({
    'todos.insert'(item) {
        check(item, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        TodosCollection.insert({
            item,
            createdAt: new Date(),
            userId: this.userId,
        })
    },

    'todos.remove'(todoId) {
        check(todoId, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        TodosCollection.remove(todoId);
    },

    'todos.setCompleted'(todoId, completed) {
        check(todoId, String);
        check(completed, Boolean);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        TodosCollection.update(todoId, {
            $set: {
                completed
            }
        });
    }
});