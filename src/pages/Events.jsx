import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ConceptCard from "../components/ConceptCard";
import basketballConceptsData from "../data/basketballConceptsData";

function Events() {
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filteredConcepts = useMemo(() => {
    return basketballConceptsData.filter((concept) => {
      const matchesCategory = category === "All" || concept.category === category;
      const matchesDifficulty =
        difficulty === "All" || concept.difficulty === difficulty;

      return matchesCategory && matchesDifficulty;
    });
  }, [category, difficulty]);

  return (
    <main className="page">

      <h1>Browse Playbook</h1>
      <p className="page__subtitle">
        Explore basketball concepts by category and difficulty.
      </p>

      <form className="event-search">
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
      </form>

      <section className="results">
        {filteredConcepts.map((concept) => (
          <ConceptCard key={concept.id} concept={concept} />
        ))}
      </section>
    </main>
  );
}

export default Events;