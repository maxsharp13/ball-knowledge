import ConceptCard from "../components/ConceptCard";

function CommunityPlays({ plays, playsError }) {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero__title">Community Plays</h1>
        <p className="hero__subtitle">User-created basketball concepts and formations.</p>
      </section>

      {playsError && <p className="error">{playsError}</p>}

      {plays.length === 0 && !playsError ? (
        <p>No community plays uploaded yet.</p>
      ) : (
        <section className="concept-grid">
          {plays.map((play) => (
            <ConceptCard key={play._id} concept={play} />
          ))}
        </section>
      )}
    </main>
  );
}

export default CommunityPlays;