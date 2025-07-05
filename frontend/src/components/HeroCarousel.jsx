import { useState } from "react";

const images = [
  "/dept_img.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
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
    <div className="relative overflow-hidden rounded-3xl shadow-lg">
      <img
        src={images[current]}
        alt="Department"
        className="w-full h-[60vh] object-cover rounded-3xl"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
      >
        &#8592;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
      >
        &#8594;
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-2 rounded-lg text-xl">
        Welcome to the Department of Mathematics
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:brightness-110"
        >
          KNOW MORE
        </a>
      </div>
    </div>
  );
};

export default HeroCarousel;
