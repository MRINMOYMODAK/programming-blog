import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import PostDetails from './Component/PostDetails/PostDetails';
import NotFound from './Component/NotFound/NotFound';

export const CategoryContext = createContext();

function App() {
  const [post, setPost] = useState([]);
  useEffect( () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data));
  }, []);

  return (
    <CategoryContext.Provider value={post}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home posts={post}></Home>
          </Route>
          <Route exact path="/">
            <Home posts={post}></Home>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails posts={post}></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </CategoryContext.Provider>
  );
}

export default App;
