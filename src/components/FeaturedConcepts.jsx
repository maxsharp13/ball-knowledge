import basketballConceptsData from "../data/basketballConceptsData";
import ConceptCard from "./ConceptCard";

function FeaturedConcepts() {
  const featuredConcepts = basketballConceptsData.slice(0, 3);

  return (
    <section>
      <h2>Featured Basketball Concepts</h2>

      {featuredConcepts.map((concept) => (
        <ConceptCard key={concept.id} concept={concept} />
      ))}
    </section>
  );
}

export default FeaturedConcepts;