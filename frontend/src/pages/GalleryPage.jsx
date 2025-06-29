import idm1 from '../assets/images/IDM/001.jpg'
import idm2 from '../assets/images/IDM/002.jpg'
import idm3 from '../assets/images/IDM/003.jpg'
import idm4 from '../assets/images/IDM/004.jpg'
import idm5 from '../assets/images/IDM/005.jpg'
import teachersDay1 from '../assets/images/teachers-day/001.jpg'
import teachersDay2 from '../assets/images/teachers-day/002.jpg'
import teachersDay3 from '../assets/images/teachers-day/003.jpg'
import teachersDay4 from '../assets/images/teachers-day/004.jpg'
import teachersDay5 from '../assets/images/teachers-day/005.jpg'
import freshersParty1 from '../assets/images/freshers-party/001.jpg'
import freshersParty2 from '../assets/images/freshers-party/002.jpg'
import freshersParty3 from '../assets/images/freshers-party/003.jpg'
import freshersParty4 from '../assets/images/freshers-party/004.jpg'
import freshersParty5 from '../assets/images/freshers-party/005.jpg'
import mathsQuest1 from '../assets/images/maths-quest/001.jpg'
import mathsQuest2 from '../assets/images/maths-quest/002.jpg'
import mathsQuest3 from '../assets/images/maths-quest/003.jpg'
import mathsQuest4 from '../assets/images/maths-quest/004.jpg'
import mathsQuest5 from '../assets/images/maths-quest/005.jpg'

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
      imageUrls: [teachersDay1,teachersDay2,teachersDay3,teachersDay4,teachersDay5],
      title: "Teacher's Day Celebration",
      description:
        `A heartfelt tribute to our mentors and educators, Teacher's Day is a celebration of their unwavering guidance, patience, and dedication. The event features cultural performances, student-led activities, and special gestures of appreciation to honor the pillars of learning.`,
    },
    {
      imageUrls: [mathsQuest1,mathsQuest2,mathsQuest3,mathsQuest4,mathsQuest5],
      title: 'Math Quest',
      description:
        'Description About maths quest',
    },
    {
      imageUrls: [freshersParty1, freshersParty2,freshersParty3,freshersParty4,freshersParty5],
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
