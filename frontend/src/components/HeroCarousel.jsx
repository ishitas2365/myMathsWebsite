import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import deptImg from '../assets/images/dept_img.jpg';
import gallery2 from '../assets/images/dept_img.jpg';
import gallery3 from '../assets/images/dept_img.jpg';

const images = [
  { src: deptImg, showWelcome: true },
  { src: gallery2, showWelcome: false },
  { src: gallery3, showWelcome: false },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  const changeSlide = (newIndex, dir) => {
    setDirection(dir);
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    changeSlide((current + 1) % images.length, 'next');
  };

  const prevSlide = () => {
    changeSlide((current - 1 + images.length) % images.length, 'prev');
  };

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] mx-auto my-5 w-[97%] aspect-video">
      <div
        className={`transition-transform duration-700 ease-in-out flex`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full relative bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(6,6,6,0.5), rgba(39,38,38,0.5)), url(${img.src})`,
            }}
          >
            {img.showWelcome && (
              <>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center px-4">
                  <h1 className="welcome text-3xl md:text-5xl font-bold leading-snug">
                    Welcome to the Department of Mathematics
                  </h1>
                  <div className="know_more mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white text-lg cursor-pointer">
                    <a href="#">KNOW MORE</a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default HeroCarousel;
