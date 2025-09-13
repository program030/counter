//TodoList Store
// import { create } from "zustand";

// interface TodoInterface {
//     message: string;
//     todoList: string[];
//     addTodo: (msg: string) => void;
//     removeTodo: (index: number) => void;
//     clearTodos: () => void;
// }
// export const useTodoStore = create<TodoInterface>((set) => ({
//     message: "Todo List",
//     todoList: [],
//     addTodo: (msg) => set((state) => ({todoList: [...state.todoList, msg]})),

//     removeTodo: (index) => set((state) => ({todoList: state.todoList.filter((_, i) => i !== index)})),

//     clearTodos: () => set({ todoList: [] })
// }));

import { create } from "zustand";

interface TodoState {
  todoList: string[];
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoList: [],
  addTodo: (todo) =>
    set((state) => ({
      todoList: [...state.todoList, todo],
    })),
  removeTodo: (index) =>
    set((state) => ({
      todoList: state.todoList.filter((_, i) => i !== index),
    })),
}));
