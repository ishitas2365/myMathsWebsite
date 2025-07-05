import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      {/* Title Bar */}
      {/* Hero Section */}
      <div className="relative mx-6 mt-8 rounded-3xl overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(6,6,6,0.5), rgba(39,38,38,0.5)), url('/dept_img.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-white text-center py-32">
          <h1 className="text-4xl md:text-6xl tracking-wider mb-8">Welcome to the Department of Mathematics</h1>
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg inline-block px-8 py-3 cursor-pointer hover:brightness-110">
            <a href="#" className="text-white text-xl">KNOW MORE</a>
          </div>
        </div>
      </div>

      {/* About + Quick Links Section */}
      <div className="flex flex-wrap justify-center gap-12 my-20 mx-6">
        {/* About the Department */}
        <div className="bg-white p-8 rounded-xl border-8 border-gray-800 max-w-2xl shadow-xl">
          <h1 className="text-3xl font-semibold tracking-wide mb-4">ABOUT THE DEPARTMENT</h1>
          <hr className="border-gray-400 mb-4" />
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <p className="text-lg leading-relaxed">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions... The department is starting B. Tech. program in Mathematics and Computing from 2023.
            </p>
            <img src="/abt_dept.jpg" alt="About Department" className="rounded-lg w-full md:w-1/3 object-contain" />
          </div>
          <div className="mt-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg inline-block px-6 py-2">
            <a href="#" className="text-white">READ MORE</a>
          </div>
        </div>

        {/* Message from HOD */}
        <div className="bg-white p-8 rounded-xl border-8 border-gray-800 max-w-2xl shadow-xl">
          <h1 className="text-3xl font-semibold tracking-wide mb-4 text-right">MESSAGE FROM HOD</h1>
          <hr className="border-gray-400 mb-4" />
          <div className="flex gap-4 items-start">
            <img src="/sanjeev_iiti.jpg" alt="HOD" className="rounded-lg w-1/3 object-contain" />
            <p className="text-lg leading-relaxed">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions... The department is starting B. Tech. program in Mathematics and Computing from 2023.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-900 text-white p-8 rounded-xl border-8 border-gray-800 max-w-xs shadow-xl">
          <h1 className="text-3xl font-semibold tracking-wide mb-4">QUICK LINKS</h1>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-2 text-lg">
            {['Timetable', 'Syllabus', 'Faculty Login', 'Research Areas', 'Events', 'Notices', 'Admissions', 'Student Portal'].map((link) => (
              <li key={link}><a href="#" className="hover:text-pink-400">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Announcements + News Section */}
      <div className="flex flex-wrap justify-center gap-8 mx-6 my-16">
        <div className="bg-white p-6 rounded-xl border-8 border-gray-800 max-w-lg shadow-xl">
          <h1 className="text-3xl font-semibold mb-4">ANNOUNCEMENTS</h1>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-2 text-lg">
            {['New B.Tech program launched', 'PhD Admissions Open', 'Mid-Sem Exam Schedule Released', 'Convocation 2025 Notice'].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-600">{item}</a></li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <a href="/announcements" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded">View All</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-8 border-gray-800 max-w-lg shadow-xl">
          <h1 className="text-3xl font-semibold mb-4">NEWS</h1>
          <hr className="border-gray-400 mb-4" />
          <ul className="space-y-2 text-lg">
            {['Prof. Sharma wins INSA award', 'Mathematics fest concluded', 'New faculty members joined', 'Workshop on Number Theory'].map((item) => (
              <li key={item}><a href="#" className="hover:text-pink-600">{item}</a></li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <a href="/news" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded">View More</a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-around bg-white p-8 mx-6 my-16 rounded-xl shadow-xl">
        {[
          { label: 'Ph.D. Students', count: '45 +' },
          { label: 'M.Sc. Students', count: '35 +' },
          { label: 'Faculty', count: '19 +' },
          { label: 'B.Tech. Students', count: '100 +' }
        ].map((stat) => (
          <div key={stat.label} className="text-center m-4">
            <div className="text-3xl font-bold text-red-500">{stat.count}</div>
            <div className="text-2xl text-blue-700 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
