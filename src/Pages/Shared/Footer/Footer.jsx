import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white md:flex justify-around items-start p-5'>
            <div>
                <p className='md:text-5xl text-2xl font-bold mt-5 md:mb-10 mb-5 '>Chef <span className='text-orange-500'>Table</span></p>
                <p className='text-md my-2'>Address: 13/F, 32 Zhongshan No.1 Road (E) </p>
                <p className='text-md my-2'>Email: cheftableui@gmail.com</p>
                <p className='text-md my-2'>Phone: 973-883-3488</p><br />
                <p className='text-md my-2'>Follow us on:</p>
                <div className="links md:my-10 my-4">
                    <a href="https://www.facebook.com/"><img src="../../../../icons/fb.png" alt=""/></a>
                    <a href="https://www.twitter.com/"><img src="../../../../icons/twitter.png" alt=""/></a>
                    <a href="https://www.youtube.com/"><img src="../../../../icons/youtube.png" alt=""/></a>
                </div>

            </div>
            <div className='mb-5'>
            <h3 className="md:text-3xl text-2xl my-5">Book a table</h3>
            <form>
                <input className='my-2 rounded p-3 ' type="text" placeholder="Your Name"/><br/>
                <input className='my-2 rounded p-3 ' type="email" placeholder="Your Email"/><br/>
                <input className='my-2 rounded p-3 ' type="datetime" placeholder='Date/Time' name="" id="" /><br />
                {/* <textarea className='my-3 rounded p-3 ' cols="23" rows="2" placeholder="Message"></textarea><br/> */}
                <input  className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Book Now"/>
            </form>
            </div>
            <div className='mt-5 '>
                <p className='text-inherit'>+ Services</p><br />
                <p>+ About us</p><br />
                <p>+ Press</p><br />
                <p>+ News</p><br />
                <p>+ Midea kit</p>
            </div>
        </div>
    );
};

export default Footer;