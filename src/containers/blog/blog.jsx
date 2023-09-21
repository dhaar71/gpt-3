import React from "react";
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';
const Blog = () => {
    return (
        <div className="m-auto w-11/12" id="blog">
            <p className="text-3xl md:leading-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r mt-10 from-pink-500 to-orange-700 md:ml-4 md:mr-4">A lot is happening,</p> <p className="text-3xl md:leading-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-700 md:ml-4 md:mr-4">
                We are blogging about it.</p>

            <div className="grid grid-cols-3 gap-4 text-white mt-5 ">
                <div className="row-span-2  ">
                    <img src={blog1} alt="ai" className="" />
                    <div className="md:h-[439px] h-[300px] p-5 font-manrope md:font-semibold md:text-lg font-medium text-xs bg-indigo-950">
                        GPT-3 and Open  AI is the future. Let us exlore how it is?
                    </div>
                </div>

                <div className="col-span-1 ">
                    <img src={blog2} alt="ai" className="" />
                    <div className="bg-indigo-950 md:h-[193px] h-[120px] p-5 font-manrope md:font-semibold md:text-lg font-medium text-xs ">
                        GPT-3 and Open  AI is the future. Let us exlore how it is?
                    </div>
                </div>

                <div className="col-span-1  ">
                    <img src={blog3} alt="ai" className="" />
                    <div className="bg-indigo-950  md:h-[193px] h-[120px] p-5 font-manrope md:font-semibold md:text-lg font-medium text-xs ">
                        GPT-3 and Open  AI is the future. Let us exlore how it is?
                    </div>
                </div>

                <div className="col-span-1  ">
                    <img src={blog4} alt="ai" className="" />
                    <div className="bg-indigo-950  md:h-[193px] h-[120px] p-5 font-manrope md:font-semibold md:text-lg font-medium text-xs ">
                        GPT-3 and Open  AI is the future. Let us exlore how it is?
                    </div>
                </div>

                <div className="col-span-1  ">
                    <img src={blog5} alt="ai" className="" />
                    <div className="bg-indigo-950  md:h-[193px] h-[120px] p-5 font-manrope md:font-semibold md:text-lg font-medium text-xs " >
                        GPT-3 and Open  AI is the future. Let us exlore how it is?
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Blog;