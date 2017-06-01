export const todo0 = {
  id: 0,
  text: 'Describe application state as plain objects and arrays.',
  completed: true,
};

export const todo1 = {
  id: 1,
  text: 'Describe changes in the system as plain objects.',
  completed: false,
};

export const todo2 = {
  id: 2,
  text: 'Describe the logic for handling changes as pure functions.',
  completed: false,
};

export const todos_uncompleted_0_total_0 = [];
export const todos_uncompleted_0_total_1 = [todo0];
export const todos_uncompleted_1_total_1 = [todo1];
export const todos_uncompleted_1_total_2 = [todo0, todo1];

export default {
  filter: 'all',
  todos: [todo0, todo1, todo2],
};
