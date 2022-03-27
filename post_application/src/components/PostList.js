import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePostsCrud } from "../context/PostsCrudContext";
import PostCard from "./PostCard";

const PostList = (props) => {
  const {posts, retrievePosts, searchHandler, text, searchResults} = usePostsCrud();

  useEffect(() => {
    retrievePosts();
  }, []);


  const renderPostList = (text.length < 1 ? posts : searchResults).map((post) => {
    return (
      <PostCard
        post={post}
        key={post.id}
      />
    );
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  }

  return (
    <div className="main">
      <h2>
        {/* Post List */}
        <Link to="/add">
          <button className="ui button blue right">Add Post</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Posts"
            className="prompt"
            value={text}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderPostList.length > 0
          ? renderPostList
          : "No Posts available"}
      </div>
    </div>
  );
};

export default PostList;
