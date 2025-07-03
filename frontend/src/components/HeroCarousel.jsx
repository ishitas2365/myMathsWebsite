import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  '/dept_img.jpg',
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg'
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden">
      <img
        src={images[current]}
        alt="carousel"
        className="w-full h-full object-cover"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        <ArrowRight size={24} />
      </button>

      {current === 0 && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to the Department of Mathematics</h1>
          <a href="#" className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md text-lg hover:brightness-110">KNOW MORE</a>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
