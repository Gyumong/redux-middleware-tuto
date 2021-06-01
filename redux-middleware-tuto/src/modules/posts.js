/** @format */

import * as postsAPI from "../api/posts";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../lib/asyncUtils";

// 액션 타입

const GET_POSTS_LOADING = "GET_POSTS_LOADING";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST_LOADING = "GET_POST_LOADING";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = createPromiseThunk(
  GET_POSTS_LOADING,
  postsAPI.getPosts
);

export const getPost = createPromiseThunk(
  GET_POST_LOADING,
  postsAPI.getPostById
);

// 리듀서 선언

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const getPostsReducer = handleAsyncActions(GET_POSTS_LOADING, "posts");
const getPostReducer = handleAsyncActions(GET_POST_LOADING, "post");
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);

    case GET_POST_LOADING:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    default:
      return state;
  }
}
