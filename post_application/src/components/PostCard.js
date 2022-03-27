import React from "react";
import { Link } from "react-router-dom";
import { usePostsCrud } from "../context/PostsCrudContext";
import user from "../images/user.png";
import image1 from "../images/img1.jpg";

const PostCard = (props) => {
  const { id, name, email } = props.post;

  const {removePostHandler} = usePostsCrud();

  const deletePost = (id) => {
    removePostHandler(id);
  }

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to = {`/post/${id}`}
          state={{post: props.post}} 
        >
          <div className="header">{name}</div>
          <div>{email}</div>
          <div className="image">
          <img className="image1" src={image1} alt="img1" />
        </div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => deletePost(id)}
      ></i>
      <Link 
      to={`/edit`}
      state={{ post: props.post } }>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default PostCard;
