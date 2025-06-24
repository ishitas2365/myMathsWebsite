import React from 'react';

const MSc = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow mt-6">
      {/* PROGRAM DETAILS */}
      <h2 className="text-3xl font-bold text-black mb-4 border-b pb-2">PROGRAM DETAILS</h2>
      <p className="text-gray-700 mb-4">
        The M.Sc. in Mathematics program at IIT Indore is a 2-year full-time postgraduate program designed to provide in-depth theoretical and practical knowledge of mathematics. The program also supports international applicants and follows admission norms in accordance with JAM and IIT Indore guidelines.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Minimum Education Qualification (MEQ):</strong> Bachelor’s degree with Mathematics as a subject for at least two years or four semesters.</li>
        <li><strong>Qualifying Examination:</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><strong>International Students:</strong> Valid TOEFL/IELTS score <em>and</em> valid GRE score</li>
            <li><strong>Indian Students:</strong> Valid JAM qualification in Mathematics</li>
          </ul>
        </li>
        <li><strong>Eligibility Requirement (ER):</strong> As per the official JAM brochure</li>
        <li><strong>Categories of Admission:</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><strong>International Students:</strong>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>International self-financed (ISF)</li>
                <li>Sponsored by NGOs or reputed industries (ISW)</li>
                <li>Sponsored by foreign governments or under India’s bilateral programs (GSW)</li>
              </ul>
            </li>
            <li><strong>Indian Students:</strong> Not Applicable (direct JAM-based admission)</li>
          </ul>
        </li>
        <li><strong>Duration:</strong> 2 years (full-time)</li>
      </ul>

      {/* COURSE DETAILS */}
      <h2 className="text-3xl font-bold text-black mb-4 border-b pb-2">COURSE DETAILS</h2>
      <p className="text-gray-700 mb-4">
        For semester-wise syllabus and curriculum, refer to the official PDF document provided by IIT Indore below:
      </p>

      <a
        href="https://academic.iiti.ac.in/Admission/2024-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2022%20July%202024_to%20upload.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-[#4c83bb] text-white rounded hover:bg-[#3a6fa1] transition"
      >
        📄 View Full Course Structure (PDF)
      </a>
    </section>
  );
};

export default MSc;
