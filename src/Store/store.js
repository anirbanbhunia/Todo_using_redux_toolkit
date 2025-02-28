import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

//explanation
// In this code snippet, you're setting up a Redux store using Redux Toolkit's `configureStore` function and specifying the reducer to be used, which is `todoReducer` imported from `'../features/Todo/todoSlice'`. Let's break down each part:

// 1. **Importing Dependencies:**
//    ```javascript
//    import { configureStore } from '@reduxjs/toolkit';
//    import todoReducer from '../features/Todo/todoSlice';
//    ```
//    - `configureStore` is a function from Redux Toolkit used to create a Redux store with various preconfigured settings.
//    - `todoReducer` is the default export from `'../features/Todo/todoSlice'`, which contains the reducer logic for managing todos.

// 2. **Creating the Store:**
//    ```javascript
//    export const store = configureStore({
//        reducer: todoReducer
//    });
//    ```
//    - `configureStore` is called with an object as an argument.
//    - Within this object, the `reducer` field is set to `todoReducer`. This means that the Redux store will use `todoReducer` to handle state updates based on dispatched actions.

// 3. **Exporting the Store:**
//    ```javascript
//    export default store;
//    ```
//    - The created Redux store is exported as the default export, making it available for use in other parts of the application.

// Overall, this code sets up a Redux store using Redux Toolkit's `configureStore` function, with `todoReducer` being the reducer responsible for managing the state related to todos. The configured store (`store`) is then exported for use in the application, allowing components to access the global Redux state and dispatch actions to update that state.

//Yes, you're correct. In the Redux Toolkit, when you use `createSlice` to create a slice, the `reducer` field within the object returned by `createSlice` is the reducer function itself. So, `todoSlice.reducer` and `todoReducer` in your code refer to the same reducer function.

// Here's a quick summary:

// - When you create a slice using `createSlice`, the `reducer` field within the slice object (`todoSlice` in your case) contains the reducer function.
// - When you import `todoReducer` from `'../features/Todo/todoSlice'`, you're importing the default export of the slice, which is the reducer function itself.

// Both `todoSlice.reducer` and `todoReducer` can be used interchangeably to refer to the reducer function generated by `createSlice` for managing the todo state within your Redux store.