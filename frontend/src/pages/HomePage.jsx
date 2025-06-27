import React from 'react';
import HeroCarousel from '../components/HeroCarousel';

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <HeroCarousel />

      {/* About the Department */}
      <div className="max-w-6xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md border-4 border-gray-800">
        <h1 className="text-4xl font-bold mb-4">ABOUT THE DEPARTMENT</h1>
        <hr className="border-t-2 border-gray-400 mb-4" />
        <p className="text-lg leading-7">
          Since its inception in July 2009, the Department of Mathematics has evolved in several directions. The department presently offers M.Sc. and Ph. D. programs in Mathematics. In addition to these programs, the department teaches several Mathematics courses to the undergraduate and postgraduate students of various engineering and science departments. The department aims to focus on providing a comprehensive curriculum at undergraduate and postgraduate levels, relevant research and career opportunities in India and abroad. The department is starting B. Tech. program in Mathematics and Computing from 2023.
        </p>
        <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg text-sm hover:brightness-110">
          <a href="#">READ MORE</a>
        </div>
      </div>


      {/* ... */}
      <div className="grid grid-cols-2 max-h-200">
          {/* Quick Links */}
        <div className="max-w-md mx-auto mt-16 p-6 bg-[#040C3D] text-white rounded-lg shadow-md border-4 border-[#040C3D] w-full mr-0">
          <h1 className="text-3xl font-bold mb-4">QUICK LINKS</h1>
          <hr className="border-t-2 border-gray-400 mb-4" />
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-pink-400">Timetable</a></li>
            <li><a href="#" className="hover:text-pink-400">Syllabus</a></li>
            <li><a href="#" className="hover:text-pink-400">Faculty Login</a></li>
            <li><a href="#" className="hover:text-pink-400">Research Areas</a></li>
            <li><a href="#" className="hover:text-pink-400">Events</a></li>
            <li><a href="#" className="hover:text-pink-400">Notices</a></li>
            <li><a href="#" className="hover:text-pink-400">Admissions</a></li>
            <li><a href="#" className="hover:text-pink-400">Student Portal</a></li>
          </ul>
        </div>
        <div className="grid grid-cols-1">
          {/* Announcements */}
          <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md border-4 border-gray-200 ml-0 w-100">
            <h1 className="text-3xl font-bold mb-4">ANNOUNCEMENTS</h1>
            <hr className="border-t-2 border-gray-400 mb-4" />
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><a href="#">New B.Tech program launched</a></li>
              <li><a href="#">PhD Admissions Open</a></li>
              <li><a href="#">Mid-Sem Exam Schedule Released</a></li>
              <li><a href="#">Convocation 2025 Notice</a></li>
            </ul>
            <div className="mt-4 text-right">
              <a href="/announcements" className="text-sm inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded hover:brightness-110">View All</a>
            </div>
          </div>
          {/* News */}
          <div className="max-w-4xl mx-auto mt-0 p-6 bg-[#040C3D] text-white rounded-lg shadow-md border-4 border-gray-200 ml-0 w-100">
            <h1 className="text-3xl font-bold mb-4">NEWS</h1>
            <hr className="border-t-2 border-gray-400 mb-4" />
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><a href="#">Prof. Sharma wins INSA award</a></li>
              <li><a href="#">Mathematics fest concluded</a></li>
              <li><a href="#">New faculty members joined</a></li>
              <li><a href="#">Workshop on Number Theory</a></li>
            </ul>
            <div className="mt-4 text-right">
              <a href="/news" className="text-sm inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded hover:brightness-110">View More</a>
            </div>
          </div>
        </div>
      </div>


      {/* stats */}
      <div className="bg-gray-500 py-7 mt-50">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
    <div>
      <div className="text-blue-500 text-5xl mb-2">
        🎓
      </div>
      <div className="text-3xl font-bold">45+</div>
      <div className="uppercase text-sm tracking-widest mt-1">Ph.D. Students</div>
    </div>
    <div>
      <div className="text-blue-500 text-5xl mb-2">
        📘
      </div>
      <div className="text-3xl font-bold">35+</div>
      <div className="uppercase text-sm tracking-widest mt-1">M.Sc. Students</div>
    </div>
    <div>
      <div className="text-blue-500 text-5xl mb-2">
        👨‍🏫
      </div>
      <div className="text-3xl font-bold">19+</div>
      <div className="uppercase text-sm tracking-widest mt-1">Faculty</div>
    </div>
    <div>
      <div className="text-blue-500 text-5xl mb-2">
        💻
      </div>
      <div className="text-3xl font-bold">100+</div>
      <div className="uppercase text-sm tracking-widest mt-1">B.Tech. Students</div>
    </div>
  </div>
</div>


    </div>
  );
};

export default HomePage;
