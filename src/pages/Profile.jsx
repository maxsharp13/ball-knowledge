import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Navbar from "../components/Navbar";
import ConceptCard from "../components/ConceptCard";
import TermOfDay from "../components/TermOfDay";

function Profile() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <main className="page">
      <Navbar />

      <h1>Your Learning Profile</h1>
      <TermOfDay />
      <section className="profile-section">
        <h2>Saved Basketball Concepts</h2>

        {favorites.length === 0 ? (
          <p>No saved concepts yet.</p>
        ) : (
          favorites.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} isProfile={true} />
          ))
        )}
      </section>
    </main>
  );
}

export default Profile;