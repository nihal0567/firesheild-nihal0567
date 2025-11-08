import { useLoaderData } from "react-router";



const UpdateModel = () => {
    const data = useLoaderData()
const model = data.result 

 const handleSubmit=(e)=>{
        e.preventDefault()
        const formData ={
            name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            thumbnail: e.target.thumbnail.value,
        }
        fetch(`https://model-hub-inky.vercel.app/model/${model._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err =>{
            console.log(err);
        })
    }




    return (
    <div className='mt-3'>
                <div className="card border border-gray-200 bg-base-100 w-full 
                max-w-md mx-auto shadow-2xl rounded-2xl">
                    <div className="card-body p-6 relative">
                        <h2 className="text-2xl font-bold text-center mb-6">Update Modal </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Thumbnail URL */}
                            <div>
                                <label className="label font-medium">Thumbnail URL</label>
                                <input
                                    type="url"
                                    defaultValue={model.thumbnail}
                                    name="thumbnail"
                                    required
                                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                            {/* Name Field */}
                            <div>
                                <label className="label font-medium">Name</label>
                                <input
                                    type="text"
                                    defaultValue={model.name}
                                    name="name"
                                    required
                                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="Enter name"
                                />
                                <label className="label font-medium">Category</label>
                                <input
                                    type="text"
                                    defaultValue={model.category}
                                    name="category"
                                    required
                                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="Enter name"
                                />
                              
                            </div>

                           

                            {/* Description Textarea */}
                            <div>
                                <label className="label font-medium">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={model.description}
                                    rows="2"
                                    className="textarea w-full rounded-2xl focus:border-0
                                     focus:outline-gray-200 h-[50px]"
                                    placeholder="Enter description"
                                ></textarea>
                            </div>


                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 
                                to-red-600 hover:from-pink-600 hover:to-red-700"
                            >
                                Update Model
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default UpdateModel;