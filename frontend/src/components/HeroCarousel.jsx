import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import deptImg from '../assets/dept_img.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const images = [deptImg, img2, img3, img4, img5, img6];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const isFirst = index === 0;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[97%] aspect-[20/9] mx-auto mt-8 rounded-[4rem] overflow-hidden shadow-lg">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: isFirst
            ? `linear-gradient(rgba(6,6,6,0.5), rgba(39,38,38,0.5)), url(${images[index]})`
            : `url(${images[index]})`,
        }}
      ></div>

      {isFirst && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-widest">
            Welcome to the Department of Mathematics
          </h1>
          <a
            href="#"
            className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D74C7C] to-[#EE4758] text-white text-xl transition hover:brightness-110 active:scale-95"
          >
            KNOW MORE
          </a>
        </div>
      )}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;
