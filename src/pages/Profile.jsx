import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./Profile.css";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      setLoggedIn(true);

      fetch("http://localhost:3001/plays")
        .then((res) => res.json())

        .then((data) => {
          setPlays(data);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");

    window.location.reload();
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("jwt");

    try {
      const response = await fetch(
        `http://localhost:3001/plays/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setPlays((currentPlays) =>
          currentPlays.filter((play) => play._id !== id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero__title">
          Profile
        </h1>

        {loggedIn ? (
          <>
            <p className="hero__subtitle">
              Welcome back to Ball Knowledge.
            </p>

            <div className="profile-actions">
              <Link
                to="/upload-play"
                className="profile-button"
              >
                Upload Play
              </Link>

              <Link
                to="/community-plays"
                className="profile-button"
              >
                Community Plays
              </Link>

              <button
                onClick={handleLogout}
                className="profile-button profile-button_logout"
              >
                Logout
              </button>
            </div>

            <section className="profile-plays">
              <h2>Your Uploaded Plays</h2>

              {plays.length === 0 ? (
                <p>No uploaded plays yet.</p>
              ) : (
                plays.map((play) => (
                  <article
                    key={play._id}
                    className="profile-play-card"
                  >
                    <h3>{play.title}</h3>

                    <p>{play.description}</p>

                    <button
                      onClick={() =>
                        handleDelete(play._id)
                      }
                      className="profile-button profile-button_logout"
                    >
                      Delete
                    </button>
                  </article>
                ))
              )}
            </section>
          </>
        ) : (
          <>
            <p className="hero__subtitle">
              Login or create an account.
            </p>

            <div className="profile-actions">
              <Link
                to="/login"
                className="profile-button"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="profile-button"
              >
                Create Account
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Profile;