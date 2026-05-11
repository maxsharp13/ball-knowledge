import { useEffect, useState } from "react";

import ConceptCard from "../components/ConceptCard";

function CommunityPlays() {
  const [plays, setPlays] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/plays")
      .then((res) => res.json())

      .then((data) => {
        setPlays(data);

        setLoading(false);
      })

      .catch((err) => {
        console.log(err);

        setLoading(false);
      });
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero__title">
          Community Plays
        </h1>

        <p className="hero__subtitle">
          User-created basketball concepts and formations.
        </p>
      </section>

      {loading ? (
        <p>Loading plays...</p>
      ) : plays.length === 0 ? (
        <p>No community plays uploaded yet.</p>
      ) : (
        <section className="concept-grid">
          {plays.map((play) => (
            <ConceptCard
              key={play._id}
              concept={play}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default CommunityPlays;