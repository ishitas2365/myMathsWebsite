import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import "../styles/custom.css";

const HomePage = () => {
  return (
    <div className="p-4">
      <HeroCarousel />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="border-[1.5rem] border-gray-800 rounded-lg p-6 bg-white shadow-lg">
          <h2 className="text-3xl mb-4">ABOUT THE DEPARTMENT</h2>
          <hr className="border-gray-400 mb-4" />
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-base leading-relaxed">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions...
            </p>
            <img
              src="/src/assets/images/abt_dept.jpg"
              alt="About Dept"
              className="w-full md:w-1/3 rounded-lg"
            />
          </div>
          <a
            href="#"
            className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md"
          >
            READ MORE
          </a>
        </div>

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-6 bg-white shadow-lg">
          <h2 className="text-3xl mb-4 text-right">MESSAGE FROM HOD</h2>
          <hr className="border-gray-400 mb-4" />
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src="/src/assets/images/sanjeev_iiti.jpg"
              alt="HOD"
              className="w-full md:w-1/3 rounded-lg"
            />
            <p className="text-base leading-relaxed">
              Since its inception in July 2009, the Department of Mathematics has evolved in several directions...
            </p>
          </div>
        </div>
      </div>

      <div className="border-[1.5rem] border-gray-800 rounded-lg p-6 bg-gray-900 text-white shadow-lg mb-8">
        <h2 className="text-3xl mb-4">QUICK LINKS</h2>
        <hr className="border-gray-400 mb-4" />
        <ul className="flex flex-wrap gap-4 text-lg">
          {[
            "Timetable",
            "Syllabus",
            "Faculty Login",
            "Research Areas",
            "Events",
            "Notices",
            "Admissions",
            "Student Portal"
          ].map((link) => (
            <li key={link} className="w-1/4">
              <a href="#" className="hover:text-pink-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="border-[1.5rem] border-gray-800 rounded-lg p-6 bg-white shadow-lg flex-1">
          <h2 className="text-3xl mb-4">ANNOUNCEMENTS</h2>
          <hr className="border-gray-400 mb-4" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="#">New B.Tech program launched</a>
            </li>
            <li>
              <a href="#">PhD Admissions Open</a>
            </li>
            <li>
              <a href="#">Mid-Sem Exam Schedule Released</a>
            </li>
            <li>
              <a href="#">Convocation 2025 Notice</a>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md"
          >
            View All
          </a>
        </div>

        <div className="border-[1.5rem] border-gray-800 rounded-lg p-6 bg-white shadow-lg flex-1">
          <h2 className="text-3xl mb-4">NEWS</h2>
          <hr className="border-gray-400 mb-4" />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="#">Prof. Sharma wins INSA award</a>
            </li>
            <li>
              <a href="#">Mathematics fest concluded</a>
            </li>
            <li>
              <a href="#">New faculty members joined</a>
            </li>
            <li>
              <a href="#">Workshop on Number Theory</a>
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md"
          >
            View More
          </a>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 flex justify-around flex-wrap">
        {[
          { count: "45+", label: "Ph.D. Students" },
          { count: "35+", label: "M.Sc. Students" },
          { count: "19+", label: "Faculty" },
          { count: "100+", label: "B.Tech. Students" }
        ].map((stat) => (
          <div key={stat.label} className="text-center m-4">
            <div className="text-red-500 text-3xl font-bold">{stat.count}</div>
            <div className="text-blue-600 text-lg mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
