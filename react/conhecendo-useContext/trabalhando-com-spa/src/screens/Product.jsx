import { Link, useLoaderData, useParams } from "react-router-dom";
import products from "../database.json";

export default function Product() {
	// const { productId } = useParams(); // Aqui iremos pegar o valor passado na
	
	const product = useLoaderData(); 
	// irá chamar o load que foi configurado no router.jsx

  return (
    <section>
      <Link to="/products">Voltar</Link>
      <h2>Nome do produto: {product.name}</h2>
      <p>Descrição do produto: {product.description}</p>
      <p>Preço: {product.price} </p>
      <button>Comprar</button>
    </section>
  );
}
