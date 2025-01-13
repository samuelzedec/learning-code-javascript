import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "2rm" }}>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/">Inicial</Link>
      </nav>
    </header>
  );
}
