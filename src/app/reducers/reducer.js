let initialState = {
  posts: [],
  isEventLoading:false,
};

export default (quotes = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_START_FETCH":
      return Object.assign({}, state, { isEventLoading: true });

      case "LOAD_POST_FETCH_SUCCESS":
      return Object.assign({}, state, {
        posts: action.payload,
        isEventLoading: false
      });
      case "LOAD_POST_FETCH_FAILIURE":
        return Object.assign({}, state, {
          error: action.payload,
          isEventLoading: false
        });

    default:
      return state;
  }
});
