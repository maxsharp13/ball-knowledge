import { useState } from "react";
import ConceptCard from "../components/ConceptCard";
import basketballConceptsData from "../data/basketballConceptsData";
import { searchConcepts } from "../utils/searchConcepts";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filteredConcepts = searchConcepts(query).filter((concept) => {
    const matchesCategory = category === "All" || concept.category === category;
    const matchesDifficulty =
      difficulty === "All" || concept.difficulty === difficulty;

    return matchesCategory && matchesDifficulty;
  });

  const handleClear = () => {
    setQuery("");
    setCategory("All");
    setDifficulty("All");
  };

  return (
    <main className="page">

      <h1>Learn Basketball Concepts</h1>
      <p className="page__subtitle">
        Search terms, formations, defenses, and offensive actions.
      </p>

      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Try pick and roll, zone, iso..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="event-search__input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Offense</option>
          <option>Defense</option>
          <option>Formation</option>
        </select>

        <select
          className="event-search__input"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button className="search__button search__button_secondary" onClick={handleClear}>
          Clear
        </button>
      </div>

      <section className="results">
        {filteredConcepts.length === 0 ? (
          <p>No concepts found. Try a different search.</p>
        ) : (
          filteredConcepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))
        )}
      </section>

      <p className="search__hint">
        Total concepts available: <strong>{basketballConceptsData.length}</strong>
      </p>
    </main>
  );
}

export default Search;