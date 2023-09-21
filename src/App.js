import React from "react";
import './index.css';

import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility,  WhatGPT3, Header } from './containers';

function App() {
  return (
    <div className="border-box scroll-smooth p-0 bg-gradient-to-b from-blue-950 via-blue-800 to-black "> {/* Updated class name here */}


      <div className=" m-auto w-11/12 ">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      
      <Possibility />
      <CTA />
      
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
