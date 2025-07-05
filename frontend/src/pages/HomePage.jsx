import React from 'react';

const DepartmentHomePage = () => {
  return (
    <div className="bg-gray-200">

      <div className="bg-gray-200 grid grid-cols-[auto_1fr] items-center gap-8 p-8 -mt-6">
        <img src="/IITI_logo-removebg-preview (1).png" alt="Logo" className="w-40 h-40 ml-2" />
        <div className="ml-12">
          <h1 className="text-black text-4xl md:text-5xl font-normal tracking-widest shadow-md">DEPARTMENT OF MATHEMATICS</h1>
          <h2 className="text-gray-500 text-2xl md:text-3xl font-normal tracking-wide shadow-md">INDIAN INSTITUTE OF TECHNOLOGY INDORE</h2>
        </div>
      </div>

      <nav className="grid grid-flow-col justify-around items-center bg-[#040C3D] p-4 h-24 mt-[-1rem] w-[97%] mx-auto rounded-lg">
        {['Home', 'Academic Programs', 'People', 'Research', 'Contact Us', 'Log In'].map((item) => (
          <a key={item} href="#" className="text-white text-2xl font-light tracking-wide">
            <h3>{item}</h3>
          </a>
        ))}
      </nav>

      <div className="w-[97%] mx-auto mt-8 rounded-[4rem] overflow-hidden relative" style={{ backgroundImage: "linear-gradient(rgba(6,6,6,0.5), rgba(39,38,38,0.5)), url('/dept_img.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold tracking-widest mb-4">Welcome to the Department of Mathematics</h1>
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg py-2 px-8 text-white text-xl hover:brightness-110 active:scale-95 mt-8">
            <a href="#">KNOW MORE</a>
          </div>
        </div>
        <div className="pt-[50%] md:pt-[40%] lg:pt-[30%]" />
      </div>

      <div className="flex flex-wrap justify-center gap-20 my-20 mx-auto max-w-[130rem]">

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-10 bg-white shadow-xl max-w-[56rem]">
          <h1 className="text-3xl tracking-wider whitespace-nowrap">ABOUT THE DEPARTMENT</h1>
          <hr className="my-4 border-t-2 border-gray-500" />
          <div className="flex flex-wrap gap-8">
            <p className="text-lg leading-8 max-w-[60%] min-w-[25rem] max-h-[40rem] overflow-hidden line-clamp-9">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions... (content continues)
            </p>
            <img src="/abt_dept.jpg" alt="About" className="rounded-lg max-w-[90%] min-w-[15rem] mt-8" />
          </div>
          <div className="mt-8">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg py-2 px-8 text-white inline-block hover:brightness-110">
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-10 bg-white shadow-xl max-w-[56rem]">
          <h1 className="text-3xl tracking-wider whitespace-nowrap text-right">MESSAGE FROM HOD</h1>
          <hr className="my-4 border-t-2 border-gray-500" />
          <div className="flex gap-8">
            <img src="/sanjeev_iiti.jpg" alt="HOD" className="rounded-lg max-w-[60%] min-w-[15rem]" />
            <p className="text-lg leading-8 max-w-[60%] min-w-[25rem]">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions... (content continues)
            </p>
          </div>
        </div>

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-10 bg-[#202020] text-white shadow-xl max-w-[56rem]">
          <h1 className="text-3xl tracking-wider whitespace-nowrap">QUICK LINKS</h1>
          <hr className="my-4 border-t-2 border-gray-500" />
          <ul className="flex flex-wrap gap-4">
            {['Timetable', 'Syllabus', 'Faculty Login', 'Research Areas', 'Events', 'Notices', 'Admissions', 'Student Portal'].map((link) => (
              <li key={link} className="flex-1 text-center text-xl hover:text-pink-500">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-[130rem] p-8">

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-10 bg-white shadow-xl min-w-[40rem] max-w-[65%]">
          <h1 className="text-3xl tracking-wider whitespace-nowrap">ANNOUNCEMENTS</h1>
          <hr className="my-4 border-t-2 border-gray-500" />
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">New B.Tech program launched</a></li>
            <li><a href="#" className="hover:text-pink-500">PhD Admissions Open</a></li>
            <li><a href="#" className="hover:text-pink-500">Mid-Sem Exam Schedule Released</a></li>
            <li><a href="#" className="hover:text-pink-500">Convocation 2025 Notice</a></li>
          </ul>
          <div className="text-right mt-4">
            <a href="/announcements" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-1 px-3 rounded hover:brightness-110">View All</a>
          </div>
        </div>

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-10 bg-white shadow-xl min-w-[30rem] max-w-[35%]">
          <h1 className="text-3xl tracking-wider whitespace-nowrap">NEWS</h1>
          <hr className="my-4 border-t-2 border-gray-500" />
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">Prof. Sharma wins INSA award</a></li>
            <li><a href="#" className="hover:text-pink-500">Mathematics fest concluded</a></li>
            <li><a href="#" className="hover:text-pink-500">New faculty members joined</a></li>
            <li><a href="#" className="hover:text-pink-500">Workshop on Number Theory</a></li>
          </ul>
          <div className="text-right mt-4">
            <a href="/news" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-1 px-3 rounded hover:brightness-110">View More</a>
          </div>
        </div>

      </div>

      <div className="flex flex-wrap justify-around bg-white shadow-lg p-8">
        {[
          { label: 'Ph.D. Students', count: '45 +' },
          { label: 'M.Sc. Students', count: '35 +' },
          { label: 'Faculty', count: '19 +' },
          { label: 'B.Tech. Students', count: '100 +' },
        ].map((stat) => (
          <div key={stat.label} className="text-center m-4 min-w-[15rem]">
            <div className="text-red-500 text-3xl font-bold">{stat.count}</div>
            <div className="text-blue-700 text-2xl mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DepartmentHomePage;
