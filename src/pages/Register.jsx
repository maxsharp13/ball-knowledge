import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    register(name, email, password)
      .then(() => navigate("/login"))
      .catch(() => setError("Registration failed. Please try again."));
  };

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}

export default Register;