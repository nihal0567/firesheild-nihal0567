import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router";



export default function PopularToys({model}) {

  const {_id,thumbnail,name,category,description,created_at,created_by,downloads} = model 
 return (
      <Link to={`/about/${_id}`}  className="card cursor-pointer bg-base-100  shadow-sm hover:scale-102 transition-all">
      <Helmet>
                <title>Home | Kidstuff</title>
                <meta name="description" content=" Kidstuff store to explore toys, manage products, and more." />
            </Helmet>
        <figure className="overflow-hidden h-48">
          <img className="w-full object-cover h-56 p-3"
            src={thumbnail}
            alt=""/>
        </figure>
        <div className="card-body">
        <p className="text-xl">{name} </p>
          <h2 className="card-title line-clamp-1">
            {category}
          </h2>
          <p className="text-pink-400">{created_by} </p>
          <p className="line-clamp-1">{description} </p>
          <p>{created_at} </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{downloads}</div>
          </div>
        </div>
      
      </Link>

  );
}
