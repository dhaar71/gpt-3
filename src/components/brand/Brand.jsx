import React from "react";
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

const Brand = () => {
  return ( 
    <div className="flex flex-wrap justify-center items-center lg:flex-row pt-10 pb-10">
      <div className="p-2">
        <img src={google} alt="google"  />
      </div>
      <div className="p-2">
        <img src={slack} alt="slack" />
      </div>
      <div className="p-2">
        <img src={atlassian} alt="atlassian"  />
      </div>
      <div className="p-2">
        <img src={dropbox} alt="dropbox"  />
      </div>
      <div className="p-2">
        <img src={shopify} alt="shopify"  />
      </div>
    </div>
  );
}

export default Brand;
