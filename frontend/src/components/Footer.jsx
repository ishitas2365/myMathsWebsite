import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#040C3D] text-white px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Address</h2>
          <div className="w-10 h-1 bg-[#4c83bb] mb-4 rounded-sm"></div>
          <p>Department of Mathematics</p>
          <p>Indian Institute of Technology Indore</p>
          <p>Simrol, Indore – 453552</p>
          <p>Madhya Pradesh, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Quick Links</h2>
          <div className="w-10 h-1 bg-[#4c83bb] mb-4 rounded-sm"></div>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.iiti.ac.in/"
                className="hover:text-[#4c83bb] hover:underline text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                IIT Indore Homepage
              </a>
            </li>
            <li>
              <a
                href="https://academic.iiti.ac.in/"
                className="hover:text-[#4c83bb] hover:underline text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Academic Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Contact Us</h2>
          <div className="w-10 h-1 bg-[#4c83bb] mb-4 rounded-sm"></div>
          <p className="mb-2">📞 +91-0731-660 Extn 3480, 3394 (Office)</p>
          <p>
            📧{' '}
            <a
              href="mailto:mathoffice@iiti.ac.in"
              className="text-blue-300 hover:underline"
            >
              mathoffice@iiti.ac.in
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Department of Mathematics, IIT Indore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
