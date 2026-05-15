import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./ConceptCard.css";

function ConceptCard({ concept, isProfile }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isSaved = favorites.some((favorite) => favorite.id === concept.id);

  const item = {
    id: concept.id,
    title: concept.title,
    category: concept.category,
    difficulty: concept.difficulty,
    description: concept.description,
    example: concept.example,
    image: concept.image,
  };

  return (
    <article className="card">
      <p className="card__sport">{concept.category}</p>

      <h3 className="card__title">{concept.title}</h3>

      {concept.image && (
        <img className="card__image card__image_large" src={concept.image} alt={concept.title} />
      )}

      <p className="card__meta">Difficulty: {concept.difficulty}</p>

      <p className="card__desc">{concept.description}</p>

      <p className="card__teams">
        <strong>Example:</strong> {concept.example}
      </p>

      <div className="card__actions">
        {isProfile ? (
          <button className="card__button" onClick={() => removeFavorite(concept.id)}>
            Remove
          </button>
        ) : isSaved ? (
          <button className="card__button card__button_disabled" disabled>
            Saved
          </button>
        ) : (
          <button className="card__button" onClick={() => addFavorite(item)}>
            Save Concept
          </button>
        )}
      </div>
    </article>
  );
}

export default ConceptCard;