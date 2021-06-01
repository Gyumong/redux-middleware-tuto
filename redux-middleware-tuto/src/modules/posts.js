/** @format */

import * as postsAPI from "../api/posts";
import { reducerUtils } from "../lib/asyncUtils";

// 액션 타입

const GET_POSTS_LOADING = "GET_POSTS_LOADING";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST_LOADING = "GET_POST_LOADING";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => async (dispatch) => {
  // 요청 시작됨
  dispatch({ type: GET_POSTS_LOADING });
  // API를 호출
  try {
    const posts = await postsAPI.getPosts();
    // 성공했을 때
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    // 실패했을 때
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청 시작됨
  dispatch({ type: GET_POST_LOADING });
  // API를 호출
  try {
    const post = await postsAPI.getPost(id);
    // 성공했을 때
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (e) {
    // 실패했을 때
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

// 리듀서 선언

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };
    case GET_POST_LOADING:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.post),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}