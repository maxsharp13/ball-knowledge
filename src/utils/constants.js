export const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://ball-knowledge-production.up.railway.app"
    : "http://localhost:3001";