import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/posts/Post";
import Nav from "./layout/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route  path="/post/:id" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
