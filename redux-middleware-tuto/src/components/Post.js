/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPost, getPost } from "../modules/posts";
const Post = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const {
    data: post,
    loading,
    error,
  } = useSelector((state) => state.posts.post);
  const postId = parseInt(id);
  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
