import React from 'react';
import { Zoom } from 'react-reveal';
import Typed from 'react-typed';

const HeroPart = () => {
    return (
        <div className=' font-bold space-y-2 flex items-center justify-center flex-col h-5/6'>
            <h2 className=' text-7xl text-center'><Typed
                strings={['THE ROOTS OF INTERNET MADE']}
                typeSpeed={40}
                backSpeed={50}
                loop
            /></h2>
            <Zoom>
                <button className=' text-white w-96 text-4xl uppercase hover:bg-white hover:text-black p-5 border-4 ease-in duration-300 font-bold '>
                    shop at open sea
                </button>
            </Zoom>
        </div>
    );
};

export default HeroPart;