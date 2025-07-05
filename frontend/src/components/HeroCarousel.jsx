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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] mx-auto my-5 w-[97%] aspect-video">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-full relative bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(6,6,6,0.5), rgba(39,38,38,0.5)), url(${img.src})`,
            }}
          >
            {img.showWelcome && (
              <>
                <div className="welcome">
                  <h1>Welcome to the Department of Mathematics</h1>
                </div>

                <div className="know_more">
                  <a href="#">KNOW MORE</a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
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
