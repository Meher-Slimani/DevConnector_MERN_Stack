import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import { getPost } from "../../actions/post";

const Post = ({ match }) => {
  const postState = useSelector((state) => state.post);
  const { post, loading } = postState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(match.params.postId));
  }, [dispatch]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />
    </>
  );
};

export default Post;
