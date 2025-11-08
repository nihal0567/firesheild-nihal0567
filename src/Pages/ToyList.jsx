import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from 'react-router';

const ToyList = ({ toy }) => {
  const { toyId, availableQuantity, description, pictureURL, price, toyName, rating } = toy;

  return (
      <div className=' overflow-hidden my-5'>
      <Helmet>
                <title>About-Toy | Kidstuff</title>
                <meta name="description" content=" explore toys list,  and more." />
            </Helmet>
        <div className="card bg-base-100  shadow-sm hover:scale-105 transition-all">
          <figure className="overflow-hidden h-48">
            <img className="w-full object-cover p-3"
              src={pictureURL}
              alt={toyName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {toyName}
            </h2>
            <p>availableQuantity:{availableQuantity}</p>
            <p>price: ${price} </p>
            <p className='line-clamp-2'>{description} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">rating:{rating}</div>
              <Link to={`/about/${toyId}`} className="badge hover:bg-red-200 badge-outline cursor-pointer">view more</Link>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ToyList;