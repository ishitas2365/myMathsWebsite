import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-2 text-left">
          CONTACT US
        </h1>
        <div className="w-24 h-1 bg-[#4c83bb] mb-6 rounded-sm"></div>

        <div className="bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-[#4c83bb] text-center mb-10">
          Department of Mathematics, IIT Indore
        </h2>

          {/* Address */}
          <div className="mb-8">
            <div className="flex items-center text-[#4c83bb] font-semibold text-xl mb-1">
              <MapPinIcon className="h-6 w-6 mr-2" />
              Address
            </div>
            <p className="text-gray font-semibold ml-8">
              Indian Institute of Technology Indore, Khandwa Road, Simrol, Indore, Madhya Pradesh 453552
            </p>
          </div>

          {/* Email */}
          <div className="mb-8">
            <div className="flex items-center text-[#4c83bb] font-semibold text-xl mb-1">
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              Email
            </div>
            <p className="text-gray font-semibold ml-8">mathoffice@iiti.ac.in</p>
          </div>

          {/* Phone */}
          <div className="mb-8">
            <div className="flex items-center text-[#4c83bb] font-semibold text-xl mb-1">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Phone
            </div>
            <p className="text-gray font-semibold ml-8">+91 0731-660 Extn 3480, 3394 (Office) </p>
          </div>

          {/* Map */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-md border mt-8">
            <iframe
              title="IIT Indore Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4544370613303!2d75.92056217453982!3d22.524643434727768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1750797289541!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
