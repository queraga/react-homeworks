import { users } from "../data/users";
import { SET_FILTER } from "./actions";

const initialState = {
  users: users,
  filter: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
