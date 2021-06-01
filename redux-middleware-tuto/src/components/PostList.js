/** @format */

import React, { useEffect } from "react";
import { getPosts } from "../modules/posts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const PostList = () => {
  const dispatch = useDispatch();
  const {
    data: posts,
    loading,
    error,
  } = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !posts) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!posts) return null;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
