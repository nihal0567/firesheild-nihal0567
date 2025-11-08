import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
const MainLayout = () => {
    
 
    return (
        <div className='flex flex-col min-h-screen'>
             <header>
                <div className='  mb-10'>
                <Navbar></Navbar>
                </div>
                <Slider></Slider>
            </header>

            <main className='max-w-screen-2xl w-full mx-auto px-4 md:px-8 flex-1'>
                <Outlet></Outlet>
            </main>

           <Footer></Footer>
        </div>
    );
};

export default MainLayout;