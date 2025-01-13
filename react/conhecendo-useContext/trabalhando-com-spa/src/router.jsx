import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import AdminHome from "./screens/admin/Admin";
import RootLayout from "./screens/RootLayout";
import Product from "./screens/Product";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

// Usando o createBrowserRouter() simula o navegador
const router = createBrowserRouter([
  {
    // Caminho na url
    path: "/",
    element: <RootLayout />, // Qual componente ele irá renderizar nessa rota
		children: [ // Aqui serã o rotas filhas 
			{
				index: true, // Essa será a rota que o componente irá iniciar
				element: <Home />
			},
      {
        path: "products",
        element: <Products />,
			},
			{
				// Ao usar um parâmetro estamos especificando um parâmetro
				path: "products/:productId", 
				element: <Product />,
				loader: loadProduct,
				// loader é uma função que vai carregar os dados necessários para uma rota funcione
				errorElement: <ProductBoundary/>
			},
      {
        path: "cart",
        element: <Cart />,
			}
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
