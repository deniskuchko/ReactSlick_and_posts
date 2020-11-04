/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./Loader";
import Post from "./Post";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchPosts);
  const loading = useSelector((state) => state.app.loading);
  if (loading) {
    return <Loader />;
  }
  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
        disabled={loading}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post) => <Post key={post.id} post={post} />);
};
