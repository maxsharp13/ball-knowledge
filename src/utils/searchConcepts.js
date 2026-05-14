import basketballConceptsData from "../data/basketballConceptsData";

export const searchConcepts = (query) => {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) return basketballConceptsData;

  return basketballConceptsData.filter((concept) => {
    return (
      concept.title.toLowerCase().includes(cleanQuery) ||
      concept.category.toLowerCase().includes(cleanQuery) ||
      concept.difficulty.toLowerCase().includes(cleanQuery) ||
      concept.description.toLowerCase().includes(cleanQuery) ||
      concept.example.toLowerCase().includes(cleanQuery) ||
      concept.keywords.some((keyword) => keyword.includes(cleanQuery))
    );
  });
};