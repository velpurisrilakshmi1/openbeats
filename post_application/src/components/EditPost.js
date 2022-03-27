import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostsCrud } from "../context/PostsCrudContext";

const EditPost = () =>  {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.post;
  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const {updatePostHandler} = usePostsCrud();
  

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    updatePostHandler({id, name: newName, email : newEmail});
    setNewName("");
    setNewEmail("")
    navigate("/");
  };

    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
}

export default EditPost;
