import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-semibold text-center">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link 
              to={`/product/${product.id}`}
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
