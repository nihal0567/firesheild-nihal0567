import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-pink-100 to-blue-100 text-center py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
                    Discover the Joy of Toys!
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Fun, safe, and colorful toys that bring smiles to every child.
                </p>
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
                    Shop Now
                </button>
            </section>
        </div>
    );
};

export default Hero;