import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import AddPost from "./AddPost";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPost from "./EditPost";
import { PostsCrudContextProvider } from "../context/PostsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <PostsCrudContextProvider>
        <Routes>
          <Route
            path="/"
            exact
            element={<PostList/>}
          />
          <Route
            path="/add"
            element={<AddPost />}
          />

          <Route
            path="/edit"
            element = {<EditPost />}
          />

          <Route path="/post/:id" element={<PostDetail/>} />
        </Routes>
        </PostsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
