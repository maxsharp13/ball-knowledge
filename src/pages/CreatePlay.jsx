import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlay } from "../utils/api";
import "./Auth.css";

function CreatePlay() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlay({ title, category, difficulty, description, example, image })
      .then(() => navigate("/community-plays"))
      .catch(() => setError("Upload failed. Please try again."));
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Upload Play</h1>
        {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Play title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input type="text" placeholder="Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="NBA example" value={example} onChange={(e) => setExample(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Upload Play</button>
      </form>
    </main>
  );
}

export default CreatePlay;