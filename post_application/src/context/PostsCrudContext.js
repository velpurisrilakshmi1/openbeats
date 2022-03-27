import { createContext, useContext, useState } from "react";
import api from "../api/posts";
import { uuid } from "uuidv4";

const postsCrudContext = createContext();

export function PostsCrudContextProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [text, setText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    //RetrievePosts
  const retrievePosts = async () => {
    const response = await api.get("/posts");
    if (response.data) {
      setPosts(response.data);
    } 
  };

  const addPostHandler = async (post) => {
    const request = {
      id: uuid(),
      ...post,
    };
    const response = await api.post("/posts", request);
    setPosts([...posts, response.data]);
  };

  const removePostHandler = async (id) => {
    await api.delete(`/posts/${id}`);
    const newPostList = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(newPostList);
  };

  const updatePostHandler = async (post) => {
    const response = await api.put(`/posts/${post.id}`, post);
    const { id } = response.data;
    setPosts(
      posts.map((post) => {
        return post.id === id ? { ...response.data } : post;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== "") {
      const newPostList = posts.filter((post) => {
        console.log(post);
        return Object.values(post)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newPostList);
    }else {
      setSearchResults(posts);
    }
  };

  const value = {
    post,
    posts,
    retrievePosts,
    addPostHandler,
    removePostHandler,
    updatePostHandler,
    searchHandler,
    text,
    searchResults
  }

    return (
        <postsCrudContext.Provider value={ value }>
            {children}
        </postsCrudContext.Provider>
    )
}

export function usePostsCrud() {
    return useContext(postsCrudContext)
}