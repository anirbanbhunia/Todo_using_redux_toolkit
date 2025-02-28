import{createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1,text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer

//explaination
//  let's break down the code step by step:

// 1. **Imports:**
//    ```javascript
//    import { createSlice, nanoid } from '@reduxjs/toolkit';
//    ```
//    - `createSlice` is a function from Redux Toolkit used to create Redux slices.
//    - `nanoid` is a function also from Redux Toolkit used to generate unique IDs.

// 2. **Initial State:**
//    ```javascript
//    const initialState = {
//        todos: [{ id: 1, text: "Hello world" }]
//    };
//    ```
//    - `initialState` is an object that represents the initial state of the `todo` slice.
//    - It contains a `todos` array with one initial todo item for demonstration purposes.

// 3. **Creating the Slice:**
//    ```javascript
//    export const todoSlice = createSlice({
//        name: 'todo',
//        initialState,
//        reducers: {
//            addTodo: (state, action) => {
//                const todo = {
//                    id: nanoid(),
//                    text: action.payload
//                };
//                state.todos.push(todo);
//            },
//            deleteTodo: (state, action) => {
//                state.todos = state.todos.filter((t) => t.id !== action.payload);
//            }
//        }
//    });
//    ```
//    - `createSlice` creates a Redux slice named `'todo'` with the specified `initialState` and reducers.
//    - `addTodo` reducer adds a new todo to the `todos` array with a unique ID generated by `nanoid()` and the text provided in the `action.payload`.
//    - `deleteTodo` reducer removes a todo from the `todos` array based on its ID, using `filter` to create a new array without the deleted todo.

// 4. **Exporting Actions and Reducer:**
//    ```javascript
//    export const { addTodo, deleteTodo } = todoSlice.actions;
//    export default todoSlice.reducer;
//    ```
//    - `addTodo` and `deleteTodo` are actions generated by `createSlice` and exported for use in other parts of the application.
//    - The default export is the reducer function generated by `createSlice`, which will handle state updates based on dispatched actions.

// This code sets up a Redux slice named `'todo'` for managing todo items. It provides actions (`addTodo` and `deleteTodo`) for adding and deleting todos, along with a reducer function to handle these actions and update the state accordingly.