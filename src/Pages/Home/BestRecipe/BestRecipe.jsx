import React from 'react';

const bestRecipes = [
    {
        id: 1,
        name: 'Dim Sum',
        img: "../../../../platter-1.png",
        reviews: 288,
        price: 89
    },
    {
        id: 2,
        name: 'Kung Pao',
        img: "../../../../platter-2.png",
        reviews: 382,
        price: 99
    },
    {
        id: 3,
        name: 'Xiao Long Bao',
        img: "../../../../platter-3.png",
        reviews: 327,
        price: 78
    },
]

const BestRecipe = () => {
    return (
        <div>
            <div className=' my-20 ms-10 me-10'>
                <h2 className='md:text-6xl text-4xl text-center font-semibold text-white'>Our Best Recipes</h2>
                <p className='my-5 text-white text-center md:text-xl text-md'>True Taste of Chinese Cuisine</p>


                <div className='best-recipe-container'>
                    <div className='flex justify-evenly items-center my-16'>
                        <img className='w-1/2 h-1/2 rounded-lg ' src={bestRecipes[0].img} alt="" />
                        <div className='text-white p-5 '>
                            <p className=' text-2xl font-bold text-orange-500 mb-5'>{bestRecipes[0].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[0].reviews}</p>
                            <p>Price: ${bestRecipes[0].price}</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-center my-16'>                     
                        
                        <img className='w-100 h-64 rounded-lg ' src={bestRecipes[1].img} alt="" />
                        <div className='text-white p-5 '>
                            <p className=' text-2xl font-bold text-orange-500 mb-5'>{bestRecipes[1].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[1].reviews}</p>
                            <p>Price: ${bestRecipes[1].price}</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-center my-16'>
                        <img className='w-1/2 rounded-lg ' src={bestRecipes[2].img} alt="" />
                        <div className='text-white p-5 '>
                            <p className='text-2xl  font-bold text-orange-500 mb-5'>{bestRecipes[2].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[2].reviews}</p>
                            <p>Price: ${bestRecipes[2].price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestRecipe;