import React from 'react';

const PhD = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow mt-6">
      {/* PROGRAM DETAILS */}
      <h2 className="text-3xl font-bold text-black mb-4 border-b pb-2">PROGRAM DETAILS</h2>
      <p className="text-gray-700 mb-4">
        IIT Indore welcomes applications for admission to the Ph.D. program throughout the year and seeks highly motivated and dedicated research scholars. Generally, selected students undergo coursework in the first two semesters, allowing them to engage with faculty research and select an appropriate supervisor.
      </p>
      <p className="text-gray-700 mb-4">
        All Ph.D. students must complete required coursework. A mandatory non-credit/pass-fail course in English Communication Skills must also be completed within the first year of joining.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Category I</strong>: Candidates with M.Tech/M.E./M.Phil. or equivalent qualification must complete:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>2–3 Ph.D.-level courses (minimum 3 credits each)</li>
            <li>1 Ph.D. seminar course (minimum 2 credits)</li>
            <li>To be completed normally within 1 semester</li>
          </ul>
        </li>

        <li className="mt-4"><strong>Category II</strong>: Candidates with M.Sc./M.A./B.Tech./B.E./M.Com./MBA or equivalent qualification must complete:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>5–7 Ph.D.-level courses (minimum 3 credits each)</li>
            <li>1–2 Ph.D. seminar courses (minimum 2 credits each)</li>
            <li>To be completed normally within the first 2 semesters</li>
          </ul>
        </li>
      </ul>

      {/* External link for more details */}
      <a
        href="https://academic.iiti.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 mb-8 bg-[#4c83bb] text-white rounded hover:bg-[#3a6fa1] transition"
      >
        🔗 Click for more details
      </a>

      {/* COURSE DETAILS */}
      <h2 className="text-3xl font-bold text-black mb-4 border-b pb-2">COURSE DETAILS</h2>
      <p className="text-gray-700 mb-4">
        For detailed rules, policies, and syllabi related to the Ph.D. program, refer to the official document linked below:
      </p>

      <a
        href="https://academic.iiti.ac.in/Admission/2024-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2022%20July%202024_to%20upload.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-[#4c83bb] text-white rounded hover:bg-[#3a6fa1] transition"
      >
        📄 View Full Ph.D. Curriculum & Rules (PDF)
      </a>
    </section>
  );
};

export default PhD;
