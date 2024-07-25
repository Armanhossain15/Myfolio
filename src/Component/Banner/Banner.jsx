
import profilePik from './../../assets/hossain-arman-.png';
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Banner = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-50 to-gray-300 pt-32 -mt-28">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-5 lg:mx-auto  ">
                <div className=" mb-3 lg:mb-0">
                    <h1 className="text-xl md:text-2xl text-gray-700 mb-2">Hello Mate,</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-2">I am Arman Hossain</h1>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-violet-700 mb-4">A Web Developer</h1>
                    <p className="text-base md:text-lg  text-gray-600 max-w-xl mb-8">
                    I love creating websites! My goal is to understand what each client wants and needs, so I can give them the best solution. Making clients happy is my mission, and I always keep up with the latest in web development technology.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Armanhossain15" target="_blank">
                        <button className="btn btn-primary bg-violet-700 text-white transform rounded-none px-7 border-none ">Github<IoIosArrowForward className='text-lg'/>
                        </button>
                        </a>
                        <button className="btn btn-secondary bg-transparent text-black  rounded-none px-7 border-2 border-violet-700 hover:bg-violet-700 hover:border-violet-700 hover:text-white">Download CV<HiMiniArrowDownTray className='text-lg'/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto relative">
                    <img src={profilePik} alt="Arman Hossain" className="w-[420px] " />
                    <div className='bg-white absolute top-52 left-5 p-2 shadow-xl'>
                        <VscVscodeInsiders className='text-4xl text-blue-700'/>
                    </div>
                    <div className='bg-white absolute top-20 left-12 p-2 shadow-xl'>
                        <SiMongodb className='text-2xl text-green-600'/>
                    </div>
                    <div className='bg-white absolute top-20 right-20 p-1 shadow-xl'>
                        <SiFirebase className='text-xl text-yellow-500'/>
                    </div>
                    <div className='bg-white absolute top-12 right-0 p-2 shadow-xl'>
                        <FaNodeJs className='text-2xl text-green-700'/>
                    </div>
                    <div className='bg-white absolute top-56 right-0 p-2 shadow-xl'>
                        <FaReact className='text-4xl text-sky-700'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
