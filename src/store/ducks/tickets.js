export const Types = {
  UPDATE: "ticket/UPDATE",
  SETFILTER: "ticket/ORDERBY",
  SINCE: "ticket/SINCE",
  UNTIL: "ticket/UNTIL",
  PAGE: "ticket/PAGE",
  ORDERBY: "ticket/ORDERBY",
};

const INITIAL_STATE = {
  apiUrl: "/",
  page: "",
  order: "",
  since: "",
  until: "",
  showPriority: ""
};

export default function ticket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE:
      let order;
      let since;
      let until;
      let page;
      let priority;

      if(state.order !== ""){
        order = "&orderby=" + state.order
      }

      if(state.since !== ""){
        order = "&since=" + state.since
      }

      if(state.until !== ""){
        order = "&until=" + state.until
      }

      if(state.page !== ""){
        order = "&page=" + state.page
      }

      if(state.priority !== ""){
        order = "&highpriority=" + state.priority
      }

      return {
        ...state,
        apiUrl: '/?' + order + since + until + page + priority
      };
    case Types.ORDERBY:
      return {
        ...state,
        filter: action.payload.order
      };
    case Types.PAGE:
      return {
        ...state,
        page: action.payload.page
      };
    case Types.SINCE:
      return {
        ...state,
        since: action.payload.since.replace('/', '-')
      };
    case Types.UNTIL:
      return {
        ...state,
        until: action.payload.until.replace('/', '-')
      };
    default:
      return state;
  }
}

export const Creators = {
  updateUrl: () => ({
    type: Types.UPDATE,
  }),
  setOrder: order => ({
    type: Types.ORDERBY,
    payload: { order }
  }),
  setSince: since => ({
    type: Types.SINCE,
    payload: { since }
  }),
  setUntil: until => ({
    type: Types.API,
    payload: { until }
  }),
  setPriority: showPriority => ({
    type: Types.API,
    payload: { showPriority }
  }),
  setPage: page => ({
    type: Types.PAGE,
    payload: { page }
  })
};
