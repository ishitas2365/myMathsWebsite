import { useState } from 'react';

const images = [
  '/images/dept_img.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg'
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[4rem] my-8">
      <img
        src={images[current]}
        alt="Department Slide"
        className="w-full h-[70vh] object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 welcome">
          Welcome to the Department of Mathematics
        </h1>
        <div className="know_more text-xl md:text-2xl">
          <a href="#">KNOW MORE</a>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8592;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default HeroCarousel; 
