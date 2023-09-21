import React from "react";
import x from '../../assets/twitter.svg';
import mail from '../../assets/email.svg';
import git from '../../assets/github.svg'

const Footer = () => {
    return (
        <div className="bg-black  justify-center items-center min-h-screen">
            <div className="md:text-4xl text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-700 font-extrabold w-11/12 m-auto text-center">
                <p className="mt-10">Do you want to step into the </p> <p className="mt-5">future before others?</p>
            </div>
            <div className=" justify-center items-center w-11/12 m-auto text-center pt-10">
                <button className="border border-white text-white p-3">Request Early Access</button>
            </div>

            <div className=" text-white w-11/12 m-auto pt-10 justify-center items-center text-center">
                <div>
                    <ul>
                        <li className="p-3">Get in touch</li>
                        <li className="p-3 flex  text-center justify-center">
                            <img src={x} alt="x" className="mr-2" />
                            <span className="text-3xl font-semibold ml-4"><a href="https://twitter.com/dhaar71">X</a></span>
                        </li>
                        <li className="p-3 flex  text-center justify-center">
                            <img src={git} alt="x" className="mr-2" />
                            <span className="text-xl font-medium ml-4">
                                <a href="https://github.com/dhaar71">GitHub</a>
                            </span>
                        </li>

                        <li className="p-3 flex  text-center justify-center">
                            <img src={mail} alt="x" className="mr-2" />
                            <span className="text-xl font-medium ml-4">
                                <a href="mailto:dharmip328@gmail.com">dharmip328@gmail.com</a>
                            </span>
                        </li>


                    </ul>
                </div>

            </div>
        </div>

    );
}

export default Footer;