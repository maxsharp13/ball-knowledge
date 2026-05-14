import FeaturedConcepts from "../components/FeaturedConcepts";

function Home() {
  return (
    <main className="page">

      <section className="hero">
        <h1 className="hero__title">Ball Knowledge</h1>

        <p className="hero__subtitle">
          Whether you're new to the game of basketball, or just trying to study more.
          Here you can learn basketball terminology, offensive formations,
          defensive schemes, and save your favorite concepts.
        </p>
      </section>

      <FeaturedConcepts />
    </main>
  );
}

export default Home;