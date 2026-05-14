import { useParams } from "react-router-dom";
import basketballConceptsData from "../data/basketballConceptsData";
import ConceptCard from "../components/ConceptCard";
import "./ConceptDetails.css";

function ConceptDetails() {
  const { id } = useParams();

  const concept = basketballConceptsData.find(
    (item) => item.id === id
  );

  if (!concept) {
    return (
      <main className="page">
        <h1>Concept Not Found</h1>
      </main>
    );
  }

  const relatedConcepts = basketballConceptsData.filter(
    (item) =>
      item.category === concept.category &&
      item.id !== concept.id
  );

  return (
    <main className="page">

      <section className="details">
        <p className="details__category">
          {concept.category}
        </p>

        <h1 className="details__title">
          {concept.title}
        </h1>

        {concept.image && (
          <img
            className="details__image"
            src={concept.image}
            alt={concept.title}
          />
        )}

        <p className="details__difficulty">
          Difficulty: {concept.difficulty}
        </p>

        <p className="details__description">
          {concept.description}
        </p>

        <div className="details__example">
          <h3>NBA Examples</h3>

          <p>{concept.example}</p>
        </div>
      </section>

      {relatedConcepts.length > 0 && (
        <section className="related">
          <h2>Related Concepts</h2>

          <div className="related__grid">
            {relatedConcepts.map((item) => (
              <ConceptCard
                key={item.id}
                concept={item}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ConceptDetails;