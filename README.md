# Meteor & Svelte Todos

A simple but beautiful todos app using Meteor, Svelte and Tailwind CSS.

![Screenshot of Meteor & Svelte Todos](./meteor-svelte-todos-screenshot.png)

## Features

- Add todos
    - By pressing the Add button
    - By pressing `Enter` key while the caret is in todo item input field
    - Won't add todo item if the todo item input field is empty
    - Keeps caret focus in add todo input field for quick succession of adding todo items
- Update todos
    - Update todo item on blur or by pressing Enter key
- Delete todos
    - By pressing `X` (delete) button
    - By having an empty todo item input field on blur or by pressing `Enter` key
- Hide and show completed todos
- Pending todos count
- Reactive data
- Beautiful UI

## TODO
- [X] Add user authentication using Meteor (added 1 Feb 2022)
- [X] Create default user (added 1 Feb 2022)
- [X] When added, todos are attached to a user id (added 1 Feb 2022)
- [X] Only allow users to create, read, update, and delete their own todos (added 1 Feb 2022)
- [X] Add ability to sign in (login form) (added 1 Feb 2022)
- [X] Add ability to sign up (sign up form) (added 1 Feb 2022)
- [ ] Add email account for user account
- [ ] Remove the Meteor insecure package and define methods
- [ ] Remove the Meteor autopublish package and define publications
- [ ] Move completed todos to the bottom of the TodosList, move them back if the user marks it back to incomplete
- [ ] Add completed date when todo is marked complete, remove the completed date if the user marks it back to incomplete
- [ ] Show the completed date somehow
- [ ] Ability to add description to a todo
- [ ] Ability to add tags to a todo

## Give it a whirl

Once you've cloned or downloaded the project, then start a development server:

```bash
meteor run
```