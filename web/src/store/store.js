import { configureStore } from "redux";

const initialState = {};

function handleState(state = initialState, action) {
  switch (action.type) {
    case "SET_":
      return {
        ...state,
        user: action.user,
      };
    default:
  }
}

const store = configureStore(handleState);

export default store;
