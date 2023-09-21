import React from "react";
import Features from "../features/feature";

const WhatGPT3 = () => {
  return (
    <div className="bg-blue-950 m-auto w-11/12" id="whatGPT3">
      <div className="pt-10">
        <Features />
      </div>
      <div className="flex flex-col lg:flex-row mt-6">
        <div class="flex flex-row justify-between items-center mt-16 mb-8">
          <h1 class="text-3xl leading-10 font-extrabold max-w-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-700 ml-4">The possibilities are beyond your imagination</h1>
          <p class="font-medium   md:ml-80 cursor-pointer text-orange-600">Explore the Library</p>
        </div>


      </div>
      <div class="flex md:flex-row flex-col text-white md:space-x-4 pt-14 pl-2 pr-2 pb-10 space-y-5" id="cards">
    <div class="flex flex-col space-y-4 mt-5">
        <h2 class="text-white font-semibold flex flex-row text-lg">Chatsbots</h2>
        <p class="text-white font-extralight text-sm">We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
    </div>
    <div class="flex flex-col space-y-4">
        <h2 class="text-white font-semibold text-lg">Knowledgebase</h2>
        <p class="text-white font-extralight text-sm">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
    </div>
    <div class="flex flex-col space-y-4">
        <h2 class="text-white font-semibold text-lg">Education</h2>
        <p class="text-white font-extralight text-sm">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
    </div>
</div>

    </div>
  );
}

export default WhatGPT3;
