
import { FaCode, FaPaintBrush, FaSearch } from 'react-icons/fa';

const ServiceCard = () => {

    return (
        <div className=" py-16">
            <h2 className="text-center text-3xl font-semibold mb-10">My Services</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-transparent border border-violet-300  p-10 flex space-x-6 items-start">
                    <div className="bg-violet-100 p-4 rounded-full">
                        <FaPaintBrush className=" text-violet-700   text-xl" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                        <p className="text-gray-600 mb-4">Improve your website’s visibility on search engines</p>
                        <button className=" btn-link text-gray-800  ">Explore Service</button>
                    </div>
                </div> 
                <div className="bg-white shadow-xl border border-gray-30 p-10 flex space-x-6 items-start">
                    <div className="bg-violet-700 p-4 rounded-full">
                        <FaPaintBrush className=" text-white   text-xl" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600 mb-4">Improve your website’s visibility on search engines</p>
                        <button className=" btn-link text-violet-600  ">Explore Service</button>
                    </div>
                </div> 
                <div className="bg-transparent border border-violet-300  p-10 flex space-x-6 items-start">
                    <div className="bg-violet-100 p-4 rounded-full">
                        <FaPaintBrush className=" text-violet-700   text-xl" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Wordpress Website</h3>
                        <p className="text-gray-600 mb-4">Improve your website’s visibility on search engines</p>
                        <button className=" btn-link text-gray-800  ">Explore Service</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ServiceCard;
