const initialState = null;

const ActiveBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default ActiveBooksReducer;
