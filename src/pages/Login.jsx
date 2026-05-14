import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        navigate("/profile");
      })
      .catch(() => setError("Invalid email or password."));
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;