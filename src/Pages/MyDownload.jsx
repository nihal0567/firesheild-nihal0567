import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import PopularToys from './PopularToys';

const MyDownload = () => {
        const { user } = use(AuthContext)
        const [models, setModels] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
        
                fetch(`https://model-hub-inky.vercel.app/my-download?email=${user.email}`,{
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        //  console.log(data);
                        setModels(data)
                        setLoading(false)
                    })
            }, [user])

    if (loading) {
            <p>Loading....please wait... </p>
        }
        return (
            <div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-20 p-2 my-9'>
                    {
                        models.map(model => <PopularToys key={model._id} model={model} />)
                    }
                </div>
            </div>
        );
};

export default MyDownload;