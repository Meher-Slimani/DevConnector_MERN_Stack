import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";

const Posts = () => {
  const post = useSelector((state) => state.post);
  const { posts, loading } = post;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary"></h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      {/* Post form */}
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
