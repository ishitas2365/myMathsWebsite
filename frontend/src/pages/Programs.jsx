import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import mathimage from '../assets/mathimage.avif';

const Programs = () => {
  const location = useLocation();
  const current = location.pathname;

  // Utility function to check if route is active
  const isActive = (path) => current === `/programs/${path}`;

  // Conditional class based on active route
  const cardClass = (path) =>
    `p-6 rounded-xl shadow-md transition duration-300 hover:scale-105 block ${
      isActive(path)
        ? 'bg-[#4c83bb] text-white'
        : 'bg-white text-black hover:shadow-xl'
    }`;

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-6 inline-block border-b-4 border-[#4c83bb] pb-4">
          PROGRAMS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* B.Tech Card */}
          <Link to="btech" className={cardClass('btech')}>
            <div className="relative rounded-xl overflow-hidden mb-6 group">
              <img src={mathimage} alt="BTech" className="rounded-xl w-full opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-40 transition duration-300" />
            </div>
            <h3 className="text-xl mb-2 font-bold">B.Tech Program</h3>
            <p>Explore our undergraduate courses and curriculum.</p>
          </Link>

          {/* M.Sc Card */}
          <Link to="msc" className={cardClass('msc')}>
            <div className="relative rounded-xl overflow-hidden mb-6 group">
              <img src={mathimage} alt="MSc" className="rounded-xl w-full opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-40 transition duration-300" />
            </div>
            <h3 className="text-xl mb-2 font-bold">M.Sc Program</h3>
            <p>Learn more about our postgraduate offerings.</p>
          </Link>

          {/* Ph.D Card */}
          <Link to="phd" className={cardClass('phd')}>
            <div className="relative rounded-xl overflow-hidden mb-6 group">
              <img src={mathimage} alt="PhD" className="rounded-xl w-full opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-40 transition duration-300" />
            </div>
            <h3 className="text-xl mb-2 font-bold">Ph.D Program</h3>
            <p>Discover research areas and opportunities.</p>
          </Link>
        </div>

        {/* Render selected program details below */}
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Programs;


