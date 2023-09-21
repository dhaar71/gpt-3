import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => (
  <div className="flex flex-col lg:flex-row section__padding" id="home">
    <div className="flex-1 flex justify-center items-start flex-col lg:mr-20">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-700 text-6xl lg:text-4xl font-bold">
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="text-lg text-gray-300 mt-6">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>
      <div className="mt-6 lg:mt-10 w-full lg:w-80 flex flex-row">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-1 bg-blue-950 border-b border-white text-white h-10 p-2"
        />
        <button
          type="button"
          className="bg-orange-600 text-lg text-white h-10 w-24 ml-2"
        >
          Get Started
        </button>
      </div>
      <div className="flex items-center mt-6 lg:mt-10">
        <img src={people} alt="people" className="h-9 w-48 lg:w-auto" />
        <p className="text-white text-sm text-center ml-2">
          1,600 people requested access a visit in last 24 hours
        </p>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={ai} alt="ai" className="w-full h-full lg:w-auto" />
    </div>
  </div>
);

export default Header;
