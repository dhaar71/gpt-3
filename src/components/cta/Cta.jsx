import React from "react";
import ai from '../../assets/possibility.png';

const CTA = () => {
  return (
    <div>
      <div className="m-auto w-11/12 flex md:flex-row flex-col">
        <div className="text-white w-2/4">
          <img src={ai} alt="ai" className="md:h-[600px] align-middle" />
        </div>
        <div className=" align-middle w-1/2 mt-10">
          <h1 className="md:text-3xl text-xl md:leading-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-700 md:ml-4 md:mr-4">The possibilities are beyond your imagination
          </h1>
          <p className="text-small mt-7 md:ml-4 text-blue-500">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <h4 className="text-small md:ml-4 mt-6 text-orange-500">Request Early Access to Get Started</h4>
        </div>

      </div>
      <div className="flex flex-row bg-gradient-to-r from-pink-500 to-orange-700 m-auto w-11/12 mt-10 h-24 rounded-lg">
        <div className="text-black md:font-semibold font-medium text-center md:p-10  md:text-xl text-sm  md:flex-grow">
          Register today & start exploring the endless possibilities.
        </div>
        <div className="text-white md:font-semibold md:pt-10 md:pb-10 md:pl-20 p-5">
          <button className="bg-black md:h-13 md:w-35 h-10 w-40 p-3 mr-5 md:rounded-3xl rounded-2xl self-end">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default CTA;