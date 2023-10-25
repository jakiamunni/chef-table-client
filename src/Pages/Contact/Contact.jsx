import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
             <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p>Address: 13/F, 32 Zhongshan No.1 Road (E)<br />Shanghai,1000<br />China</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: cheftableui@gmail.com<br />Phone: 973-883-3488</p>
          </div>
        </div>
        
          </div>
        </div>
    );
};

export default Contact;