import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

const initialState = {};

const PostsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_POSTS:
      const { data } = action.payload;
      return _.mapKeys(data, 'id');
    default:
      return state;
  }
};

export default PostsReducer;
