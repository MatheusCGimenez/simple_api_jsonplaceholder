import { Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
