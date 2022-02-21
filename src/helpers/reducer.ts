interface IEmail {
  from: string;
  to: string[];
  body: string;
}

interface ITodo {
  isCompleted: boolean;
  text: string;
  linkedEmail: IEmail;
}

interface IRootState {
  userId: string;
  showCompletedOnly: boolean;
  todoTypes: string[];
  todos: ITodo[];
  iconGrid: string[][];
}

export function rootReducer(_action: any, state: IRootState): IRootState {
  // case action 1...
  // case action 2...
  return state;
}

export default rootReducer;

// Uncomment
// let state: IRootState;

// state.showCompletedOnly = true;
// state.userId = 'newId';
// state.todoTypes = [];
// state.todoTypes[0] = 'diff type';
// state.todos[1].linkedEmail.body = 'hi';
// state.todos[1].linkedEmail.to[1] = 'john@gmail.com';

// state.todoTypes.map((todo) => todo.toUpperCase());
// state.iconGrid[0].map((icon) => icon);
