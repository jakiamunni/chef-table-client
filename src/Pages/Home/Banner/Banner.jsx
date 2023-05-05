import React from 'react';

const Banner = () => {
    return (
        <div className=" w-full border-b-8 border-x-8">
            <div id="slide1" className="relative w-full">
                <img src="../../../../public/Gusto Banner.png" className="w-full" />
                <div className="text-white absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 flex-col items-center">
                    <h2 className='lg:text-6xl md:text-3xl text-xl lg:mb-12 md:mb-5 mb-2'>We bring  the freshest taste</h2>
                    <p className='lg:text-2xl md:text-md text-sm lg:mb-10 mb-3 md:w-5/6 text-center'>Welcome to Chef-Table, your go-to destination for discovering the best Chinese chefs and their mouth-watering recipes. We are dedicated to showcasing the culinary excellence of China, from traditional classics to innovative modern cuisine. </p>
                    {/* <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold md:text-xl md:w-1/3 py-2 px-4 rounded-full">
                        Make Reservation
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
