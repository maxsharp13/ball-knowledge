import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

function CreatePlay() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("");

  const [difficulty, setDifficulty] = useState("");

  const [description, setDescription] = useState("");

  const [example, setExample] = useState("");

  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwt");

    try {
      const response = await fetch(
        "http://localhost:3001/plays",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            title,
            category,
            difficulty,
            description,
            example,
            image,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        navigate("/community-plays");
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.log(err);

      alert("Server error");
    }
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Upload Play</h1>

        <input
          type="text"
          placeholder="Play title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="NBA example"
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">
          Upload Play
        </button>
      </form>
    </main>
  );
}

export default CreatePlay;