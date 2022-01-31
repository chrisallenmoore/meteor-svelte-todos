<script>
  /**
   * Import setContext to use context that was setup by the parent
   */
  import { setContext } from "svelte";
  import EmptyTodosList from "./EmptyTodosList.svelte";
  import TodosList from "./TodosList.svelte";
  import { TodosCollection } from "../api/TodosCollection.js";

  /**
   * Define stuff for todos
   */
  let todos = [];
  let todoItem = "";
  let completed = false;
  let hideCompleted = false;
  let incompleteCount;
  let pendingTodos = "";
  const hideCompletedFilter = { completed: { $ne: true } };

  $m: {
    todos = TodosCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch();

    incompleteCount = TodosCollection.find(hideCompletedFilter).count();

    pendingTodos = `${incompleteCount ? ` (${incompleteCount})` : ""}`;
  }

  /**
   * Show and hide completed todos
   */
  const setHideCompleted = (value) => {
    hideCompleted = value;
  };

  /**
   * Set the context up for child components
   */
  setContext("setHideCompletedParent", { setHideCompleted });

  /**
   * Clear and focus todo item input field upon adding a todo
   */
  async function clearFocusTodoItem() {
    const todoInput = document.getElementById("todo-item");
    todoItem = "";
    todoInput.focus();
  }

  /**
   * Create a new todo document and enter it in the database
   */
  const addTodo = (todoItem) => {
    if (!todoItem) return;
    /*const newTodo = {
      item: item,
      completed: completed,
      createdAt: new Date(),
    };*/
    TodosCollection.insert({
      item: todoItem,
      completed: completed,
      createdAt: new Date(), // current time
    });
    clearFocusTodoItem();
  };

  /**
   * When Enter key is pressed while caret is in todo input field,
   * submit the todo item if it's not empty
   */
  function addTodoKeyEnter(todoItem) {
    const todoInput = document.getElementById("todo-item");
    if (event.code === "Enter") {
      if (todoInput.value !== "") {
        addTodo(todoItem);
      }
    }
  }
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-extrabold text-center">Meteor & Svelte Todos</h1>
  </div>
  <div class="max-w-2xl mx-auto mt-20">
    <label for="todo-text" class="block text-sm font-medium text-gray-700"
      >Add todo</label
    >
    <section class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <!-- https://icons.getbootstrap.com/icons/box-arrow-in-right/ -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="todo-item"
          id="todo-item"
          class="focus:ring-0 focus:border-slate-500 block w-full rounded-none rounded-l-md pl-10 text-lg border-gray-300 transition placeholder:text-slate-400"
          placeholder="What needs to be done?"
          bind:value={todoItem}
          on:keypress|self={addTodoKeyEnter(todoItem)}
        />
      </div>
      <button
        type="button"
        class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-slate-500 text-sm font-medium rounded-r-md text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition"
        on:click={addTodo(todoItem)}
      >
        <span>Add</span>
      </button>
    </section>
    {#if todos.length > 0}
      <TodosList
        todos={todos}
        pendingTodos={pendingTodos}
        hideCompleted={hideCompleted}
      />
    {:else}
      <EmptyTodosList />
    {/if}
  </div>
</div>

<style>
  h1 {
    color: rgba(255, 255, 255, 0.3);
    text-shadow: -1px -1px rgb(51 65 85 / 20%);
  }
</style>
