import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* ===========================================
 * o StrictMode faz com que nossa aplicação
 * seja montada duas vezes para prevenir bugs.
 * Só funciona na parte de desenvolvimento
 * e não vai para produção!
 * =========================================== */
