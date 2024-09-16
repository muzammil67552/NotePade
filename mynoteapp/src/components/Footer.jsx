import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-blue-500 text-white py-4'>
            <div className='container mx-auto px-4'>
                <p className='text-center text-sm md:text-base'>
                    &copy; {year} M.Muzammil. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
