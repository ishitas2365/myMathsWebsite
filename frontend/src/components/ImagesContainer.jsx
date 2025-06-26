import arrowRight from '../assets/images/arrow-right.svg';
import arrowLeft from '../assets/images/arrow-left.svg';
import { useState } from 'react';

const ImagesContainer = ({ imageUrls, title, description }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPreviousImg() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }

  function showNextImg() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col items-start md:flex-row">
        {/* Image scroll area */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[500px] overflow-hidden">
          <div
            className="flex transition-transform duration-[900ms] ease-in-out h-full w-full"
            style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          >
            {imageUrls.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`event-img-${index}`}
                className="w-full h-full object-cover max-md:object-fill flex-shrink-0 flex-grow-0"
              />
            ))}
          </div>

          <button
            onClick={showPreviousImg}
            className="absolute top-0 cursor-pointer bottom-0 left-0 p-1  hover:bg-[rgba(0,0,0,0.5)] hover:scale-110 transition"
            aria-label="Previous image"
          >
            <img src={arrowLeft} alt="Previous" className="w-6 h-6" />
          </button>

          <button
            onClick={showNextImg}
            className="absolute top-0 cursor-pointer bottom-0 right-0 p-1  hover:bg-[rgba(0,0,0,0.5)] hover:scale-110 transition"
            aria-label="Next image"
          >
            <img src={arrowRight} alt="Next" className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className={`w-2.5 h-2.5 cursor-pointer rounded-full transition ${
                  imageIndex === index
                    ? 'bg-[#093867]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* About Section*/}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-[#093867] mb-2 border-b-2 border-[#093867] inline-block pb-1">
            {title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagesContainer;
