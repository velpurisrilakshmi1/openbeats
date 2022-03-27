import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { usePostsCrud } from "../context/PostsCrudContext";

const AddPost = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const {addPostHandler} = usePostsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addPostHandler({name, email});
    setEmail("");
    setName("");
    navigate("/");
  };
    return (
      <div className="ui main">
        <h2>Add Post</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value )}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
}

export default AddPost;
