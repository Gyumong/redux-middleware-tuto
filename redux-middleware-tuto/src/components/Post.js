/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerUtils } from "../lib/asyncUtils";
import { getPost, goToHome } from "../modules/posts";
const Post = ({ match }) => {
  const { id } = match.params;
  const postId = parseInt(id);
  const dispatch = useDispatch();
  const {
    data: post,
    loading,
    error,
  } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial()
  );
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (loading && !post) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!post) return null;

  return (
    <div>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
