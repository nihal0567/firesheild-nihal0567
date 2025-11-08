import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Teddy Bear",
    price: "$15",
    image: "https://i.ibb.co.com/C3V3nmQX/download.jpg",
  },
  {
    id: 2,
    name: "Toy Car",
    price: "$10",
    image: "https://i.ibb.co.com/ZRsVKcQv/images.jpg",
  },
  {
    id: 3,
    name: "Building Blocks",
    price: "$20",
    image: "https://i.ibb.co.com/Wv9dxgJx/images.jpg",
  },
  {
    id: 4,
    name: "iPhone",
    price: "$18",
    image: "https://i.ibb.co.com/DP1QhDtY/download.jpg",
  },
];



const FeaturedProducts = () => {
  return (
    <div>
    <section className="py-12 bg-gray-100">
      <Helmet>
                <title>Home | Kidstuff</title>
                <meta name="description" content=" Kidstuff web to explore toys, manage , and more." />
            </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 w-full cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-300 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
              <Link to="toys-list" className="text-center text-xl text-violet-400">show more</Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedProducts;