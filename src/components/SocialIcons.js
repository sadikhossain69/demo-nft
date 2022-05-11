import React from 'react';
import { BsTwitter, BsInstagram, BsDiscord, } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { Fade } from 'react-reveal';

const SocialIcons = () => {
    return (
        <>
            <Fade left>
                <div className=' flex flex-col items-start mt-[-200px] m-5 space-y-3'>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>vision</button>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>genesis collection</button>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>roadmap</button>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>faq</button>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>team</button>
                    <button className=' hover:text-slate-500 font-semibold uppercase'>how to start</button>
                </div>
            </Fade>
            <Fade right>
                <div className=' absolute bottom-0 right-10 flex flex-col space-y-5 mb-5 text-2xl'>
                    <button className=' hover:text-slate-500'><BsTwitter /></button>
                    <button className=' hover:text-slate-500'><BsInstagram /></button>
                    <button className=' hover:text-slate-500'><BsDiscord /></button>
                    <button className=' hover:text-slate-500'><FaShoppingCart /></button>
                </div>
            </Fade>
        </>
    );
};

export default SocialIcons;