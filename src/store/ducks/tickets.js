export const Types = {
  STATE: "tickets/STATE"
};

const INITIAL_STATE = {
  state: "state"
};

export default function tickets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.STATE:
      return {
        ...state,
        state: action.payload.state
      };
    default:
      return state;
  }
}

export const Creators = {
  isState: () => ({
    type: Types.STATE
  })
};
