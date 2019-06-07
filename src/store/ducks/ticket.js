export const Types = {
  API: "timer/API"
};

const INITIAL_STATE = {
  apiUrl: ""
};

export default function timer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.API:
      return {
        ...state,
        apiUrl: action.payload.apiUrl
      };
    default:
      return state;
  }
}

export const Creators = {
  setUrl: apiUrl => ({
    type: Types.API,
    payload: { apiUrl }
  })
};
