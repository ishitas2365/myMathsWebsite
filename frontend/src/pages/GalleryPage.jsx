import idm1 from '../assets/images/IDM/eye1.jpg'
import idm2 from '../assets/images/IDM/eye2.jpg'
import idm3 from '../assets/images/IDM/eye3.jpg'
import idm4 from '../assets/images/IDM/eye4.jpg'
import idm5 from '../assets/images/IDM/eye5.jpg'
import teachersDay1 from '../assets/images/teachers-day/eye1.jpg'
import teachersDay2 from '../assets/images/teachers-day/eye2.jpg'
import teachersDay3 from '../assets/images/teachers-day/eye3.jpg'
import teachersDay4 from '../assets/images/teachers-day/eye4.jpg'
import teachersDay5 from '../assets/images/teachers-day/eye5.jpg'
import teachersDay6 from '../assets/images/teachers-day/eye6.jpg'
import ImagesContainer from '../components/ImagesContainer'

const GalleryPage = () => {
  const galleryItems = [
    {
      imageUrls: [idm1,idm2,idm3,idm4,idm5],
      title: 'International Day of Mathematics (IDM)',
      description:
        'The International Day of Mathematics celebrates the beauty, creativity, and universal language of mathematics. Through engaging exhibitions, puzzles, talks, and interactive sessions, the event highlights how math shapes our world — from daily life to groundbreaking discoveries. It serves as a platform to inspire curiosity and foster appreciation for mathematical thinking.',
    },
    {
      imageUrls: [teachersDay1,teachersDay2,teachersDay3,teachersDay4,teachersDay5,teachersDay6],
      title: "Teacher's Day Celebration",
      description:
        `A heartfelt tribute to our mentors and educators, Teacher's Day is a celebration of their unwavering guidance, patience, and dedication. The event features cultural performances, student-led activities, and special gestures of appreciation to honor the pillars of learning.`,
    },
    {
      imageUrls: [idm1, teachersDay1],
      title: 'Olympiad',
      description:
        'The Olympiad is a platform for academic brilliance, where students challenge themselves across various subjects and problem-solving domains. The event encourages critical thinking, competitive spirit, and intellectual excellence in a structured, rewarding environment.',
    },
    {
      imageUrls: [idm2, teachersDay2],
      title: "Fresher's Welcome Party",
      description:
        `A vibrant and lively welcome event for the incoming batch, the Fresher's Party sets the tone for an exciting journey ahead. With energetic performances, interactive games, and a warm sense of belonging, it's an unforgettable introduction to campus life.`,
    },
  ];

  return (
    <div className="max-w-[75vw] mx-auto my-12 px-4">
      <div className="text-4xl font-bold text-center text-black mb-10 border-b-4 border-[#4c83bb] pb-4 inline-block">
        GALLERY
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        {galleryItems.map((item, index) => (
          <ImagesContainer
            key={index}
            imageUrls={item.imageUrls}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
