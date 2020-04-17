1. What problem does the context API help solve?

context API helps us pass around specific data or global variables across all levels of an application

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the source of information for the store that shows what kind of action to pass down use type:. Reducers take the previous state and action and return a new state. The store is the place where we can allow components to share state. It stores the whole state of the object in an immutable state tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global and the component state is local. The application state would be better to use if we had a larger application with many moving parts as it allows us to pass state more easily.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that lets you call action creators which return a function instead of an action object. The function receives the store's dispatch method which can be used to dispatch synchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux because of the ability to pass around state from the store which seems to be an easier way to keep track of state.
