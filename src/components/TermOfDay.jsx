import basketballConceptsData from "../data/basketballConceptsData";
import ConceptCard from "./ConceptCard";

function TermOfDay() {
  const today = new Date();

  const dayNumber = today.getDate();

  const concept =
    basketballConceptsData[
      dayNumber % basketballConceptsData.length
    ];

  return (
    <section className="term-day">
      <h2>🏀 Term of the Day</h2>

      <ConceptCard concept={concept} />
    </section>
  );
}

export default TermOfDay;