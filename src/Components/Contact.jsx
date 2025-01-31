import React, { useState } from 'react';
import { assets } from '../assets/assets';


const Contact = () => {
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aed7d26c-c179-480f-afb7-fc9138d8c7e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      event.target.reset(); // Reset form
    } else {
      setStatus({ type: "error", message: "Something went wrong. Try again." });
    }
  };


  return (
    <div className="bg-gray-100 py-15" id='Contact'>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white border-b-2 border-b-blue-600 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Us</h3>
              <div className="text-gray-600">
                <div className="flex items-center mb-2">
                <img src={assets.contact} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Call Us</span>
                </div>
                <p className="mb-4 font-medium">+92333-8431038</p>
                <div className="flex items-center mb-2">
                <img src={assets.mail} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Email Us</span>
                </div>
                <p className="mb-4 font-medium">example@mail.com</p>
                <div className="flex items-center mb-2">
                <img src={assets.loc_icon} className='w-5 mr-2'></img>
                  <span className='text-blue-400'>Address</span>
                </div>
                <p className='font-medium'>Rehman Shaheed road near Yousaf Plaza, Gujrat.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.754816564537!2d74.0655312!3d32.5860623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b2b17f0ce6d%3A0xbd8d7b166bbbae91!2zT3NhZiBBbGkgUHJvcGVydHkgQ2VudGVyINin2YjYtdin2YEg2LnZhNuMINm-2LHYp9m-2LHZuduMINiz2YbZudix!5e0!3m2!1sen!2s!4v1738309605630!5m2!1sen!2s" width="auto" height="auto"
                className='mt-3'></iframe>
              </div>
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name='name' className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name='mail' className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name='message' rows="4" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 hover:scale-transition-200 hover:cursor-pointer hover:font-medium transition-all duration-100 
                  text-white font-bold py-2 px-6 rounded-md">
                    Send Message
                  </button>
                </div>
              </form>

              {status && (
                <div className={`mt-4 text-center p-3 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;