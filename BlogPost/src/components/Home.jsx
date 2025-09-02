import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [userInput, setUserInput] = useState({ title: "", description: "" });
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (!userInput.title || !userInput.description) return;
    setPosts((prev) => [...prev, { id: crypto.randomUUID(), ...userInput }]);
    setUserInput({ title: "", description: "" });
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input userInput={userInput} setUserInput={setUserInput} />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={() => addPost()}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default Home;
