export const Types = {
  UPDATE: "ticket/UPDATE",
  SETFILTER: "ticket/ORDERBY",
  SINCE: "ticket/SINCE",
  UNTIL: "ticket/UNTIL",
  PAGE: "ticket/PAGE",
  ORDERBY: "ticket/ORDERBY",
  PRIORITY: "ticket/PRIORITY"
};

const INITIAL_STATE = {
  apiUrl: "/",
  page: "1",
  orderby: "datecreate",
  since: "",
  until: "",
  highpriority: ""
};

export default function ticket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE:
      let orderby = "";
      let since = "";
      let until = "";
      let page = "";
      let priority = "";

      if (state.order !== "") {
        orderby = "&orderby=" + state.order;
      }
      if (state.since !== "" && state.since !== "__/__/____") {
        since = "&since=" + state.since;
      }

      if (state.until !== "" && state.until !== "__/__/____") {
        until = "&until=" + state.until;
      }

      if (state.page !== "") {
        page = "&page=" + state.page;
      }

      if (state.highpriority !== "") {
        priority = "&highpriority=" + state.highpriority;
      }

      let url = "/" + orderby + since + until + page + priority;
      url = url.replace("&", "?");

      return {
        ...state,
        apiUrl: url
      };
    case Types.ORDERBY:
      return {
        ...state,
        order: action.payload.orderby
      };
    case Types.PAGE:
      return {
        ...state,
        page: action.payload.page
      };
    case Types.SINCE:
      return {
        ...state,
        since: action.payload.since.replace("/", "-")
      };
    case Types.UNTIL:
      return {
        ...state,
        until: action.payload.until.replace("/", "-")
      };
    default:
      return state;
  }
}

export const Creators = {
  updateUrl: () => ({
    type: Types.UPDATE
  }),
  setOrder: orderby => ({
    type: Types.ORDERBY,
    payload: { orderby }
  }),
  setSince: since => ({
    type: Types.SINCE,
    payload: { since }
  }),
  setUntil: until => ({
    type: Types.UNTIL,
    payload: { until }
  }),
  setPriority: highpriority => ({
    type: Types.PRIORITY,
    payload: { highpriority }
  }),
  setPage: page => ({
    type: Types.PAGE,
    payload: { page }
  })
};
