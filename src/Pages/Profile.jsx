import React, { use } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiMail } from 'react-icons/fi';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const { updateUser, setUser, user } = use(AuthContext)
    const updateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                toast("profile update")
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            .catch((error) => {
                toast.error(error.message || "Update failed");
                setUser(user);
            });

    }
    return (
            <div className='flex flex-col'>
            <Helmet>
                <title> Profile | Kidstuff</title>
                <meta name="description" content="create account to your Kidstuff web to explore toys, manage profile, and more." />
            </Helmet>
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 w-full max-w-xs transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
                        />


                        <div className="">
                            <h3 className="text-sm font-bold text-gray-800"></h3>
                            <div className=" items-center relative flex-col gap-1 mt-1 text-xs text-gray-500">
                                <div className='flex'>
                                <FiMail size={16} />
                                <span className='text-xs'>{user?.email}</span>
                                </div>
                                <span className='text-xl'>{user?.displayName}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="hero ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={updateProfile} className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                {/* password */}
                                <label className="label">Profile Picture </label>
                                <input type="text" name='photo' className="input" placeholder="share your image link" />
                                <button type='submit' className="btn btn-neutral mt-4">Save Changes </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Profile;