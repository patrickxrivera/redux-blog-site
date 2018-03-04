import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=PACHITO1234';

export const fetchPosts = () => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callback) => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const request = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
};
