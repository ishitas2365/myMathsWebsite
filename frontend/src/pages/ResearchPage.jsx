import React from 'react';
import lab1 from '../assets/images/RL1.png';
import lab2 from '../assets/images/RL2.png';
import lab3 from '../assets/images/RL3.jpg';
import lab4 from '../assets/images/RL4.png';

const labs = [
  {
    name: 'Applied Mathematics and Geomechanics (AMG) Group',
    leader: 'GROUP LEADER: DR. SANTANU MANNA',
    description:
      'Research on applied PDEs, elastic wave modeling, asymptotic analysis, wave propagation, theoretical seismology, and earthquake statistics, using both analytical and numerical methods for solving large-scale scientific problems.',
    link: 'http://people.iiti.ac.in/~santanu/',
    image: lab1,
  },
  {
    name: 'OPTImization for MAchine Learning (OPTIMAL) Lab',
    leader: 'GROUP LEADER: DR. M. TANVEER',
    description:
      'Exploring optimization techniques for machine learning models. Focus on theory, algorithms, and practical applications in AI.',
    image: lab3,
  },
  {
    name: 'Bhaskaracharya Mathematics Lab',
    leader: 'SUPPORTED BY DST-FIST, GOVT. OF INDIA',
    description:
      'Departmental computing resources to support mathematical modeling, simulations, and data-driven research.',
    link: 'https://dst.gov.in/scientific-programmes/scientific-engineering-research/fund-improvement-st-infrastructure-higher-educational-institutions-fist',
    image: lab2,
  },
  {
    name: 'Brahmagupta Mathematics Library',
    leader: 'SUPPORTED BY DST-FIST & NBHM',
    description:
      'Rich collection of mathematical literature supported by DST-FIST and NBHM. Open to department scholars.',
    image: lab4,
  },
];

const ResearchPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-4 inline-block">
          RESEARCH LABS
          <div className="w-30 h-1 bg-[#4c83bb] mb-4 rounded-sm mt-3"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md transition duration-300 hover:scale-105 bg-white text-black hover:shadow-xl"
            >
              <div className="relative rounded-xl overflow-hidden mb-4 group h-56">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="rounded-xl w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-40 transition duration-300" />
              </div>
              <h3 className="text-xl mb-1 font-bold text-[#052569]">{lab.name}</h3>  
              <p className="text-medium text-[#4c83bb] font-medium mb-2">{lab.leader}</p>
              <p className="text-sm font-semibold mb-3">{lab.description}</p>
              {lab.link && (
                <a
                  href={lab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#4c83bb] underline"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPage;