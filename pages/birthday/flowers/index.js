import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div className={'w-full h-screen flex justify-center'}>
            <iframe
                src="https://flowers-red-seven.vercel.app/"
                className='w-full h-full border-none'
                title="Flowers"
            >
            </iframe>
        </div>
    );
};

export default index;
