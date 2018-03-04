import { FETCH_WEATHER } from '../actions/index';

const weatherReducer = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case FETCH_WEATHER:
      const { data } = action.payload;
      return [data, ...state];
  }
  return state;
};

export default weatherReducer;
