import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardslice";
import UserReducer from "./userslice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// Need to import the reducer function from the card slice and add it to our store ...
// by defining a field inside the reducers parameter, we tell the store to use this slice reducer function to handle all updates to that state.

const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state.user);
    const readOnlyState = JSON.stringify(state.cardsInfo.isReadOnly);
    localStorage.setItem("userInfo", serialisedState);
    localStorage.setItem("readOnly", readOnlyState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("userInfo");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

// Global store object that will register any reducers defined elsewhere. Then the provider will make it's data accessible to the entire component tree.
// Then create a slice to represent some data in the store. It containts a collection of reducers, which are functions that take the old state and an action
// and define the logic to change the state.

export const store = configureStore({
  reducer: {
    cardsInfo: cardsReducer,
    user: UserReducer,
  },
  preloadedState: {
    user: loadFromLocalStorage(),
  },
});

store.subscribe(() => saveToLocalStorage(store.getState()));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
