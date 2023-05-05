import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Fan Bingbing",
    job: "CEO of Raphen",
    image: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    review:
      "I absolutely love the Chinese food at this restaurant! The flavors are always fresh and bold, and the portion sizes are generous. My favorite dish is the Kung Pao chicken - it's perfectly spicy and savory at the same time.",
  },
  {
    id: 2,
    name: "Liu Yifei",
    job: "Air hostess",
    image: "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    review:
      "I've been a regular customer at this Chinese restaurant for years and it never disappoints. The hot and sour soup is the best I've ever had, and the dumplings are always perfectly steamed. I highly recommend the Mongolian beef - it's tender and flavorful every time.",
  },
  {
    id: 3,
    name: "Zhang Ziyi",
    job: "Software Engineer",
    image: "https://plus.unsplash.com/premium_photo-1667518252343-0d1698a39a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    review:
      "I recently tried this new Chinese restaurant and was blown away by the quality of the food. The crispy skin on the Peking duck was perfect, and the sauce was tangy and delicious. I also loved the fried rice - it had a great mix of vegetables and wasn't greasy at all. I'll definitely be coming back for more!",
  },
];


const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <h2 className='md:text-5xl text-3xl text-center font-semibold text-white mb-10'>Reviews from our customers</h2 >
      <div style={{ backgroundColor: '#212A3E' }} className="text-white text-center lg:max-w-lg md:max-w-md max-w-xs mx-auto rounded-2xl">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4 pt-8 pb-6">
              <p className="mb-10 bg-slate-100 text-black mx-5 py-3 px-5 rounded-lg">{review.review}</p>
              <img className='rounded-full w-16 mx-auto mt-5' src={review.image} alt="" />
              <p className="text-xl text-orange-500 my-1">{review.name}</p>
              <p className="text-xs">{review.job}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
          );
};

export default CustomerReview;