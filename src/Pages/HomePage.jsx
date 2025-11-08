import React from 'react';
import { useLoaderData } from 'react-router';
import PopularToys from './PopularToys';

const Homepage = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className='my-5 '>
            <div>
              <div className="text-4xl font-bold text-gray-400 text-center my-3 md:my-2">Popular Toys</div>  
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-2 '>
            {
                data.map(model => <PopularToys model={model}></PopularToys>)
            }
        </div>
            </div>

            
            </div>
    );
};

export default Homepage;