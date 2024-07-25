import { useState } from 'react';
import { useEffect } from 'react';
import Blogcard from './Blogcard';

const Blogs = () => {
    const [allblogs, setAllblogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setAllblogs(data))
    }, [])
    // console.log('allblogs', allblogs);
    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-center text-3xl font-semibold mb-10">My Blog</h2>

            {
                allblogs?.length === 0 ? 
                <div className='w-2/3 mx-auto'>
                    <h2 className='text-2xl text-center bg-red-600 py-2 text-white'> No Blog Yet</h2>
                </div> 
                                 :
                    <div className="max-w-6xl  mx-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            allblogs?.map(blog => <Blogcard 
                                                    key={blog.id}
                                                    blog={blog}
                                                    ></Blogcard>)
                        }
                    </div>
            }




            {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg  overflow-hidden">
                    <img src={sampleImage} alt="Understanding React Hooks" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <p className="text-gray-500 mb-2">June 28, 2024</p>
                        <h3 className="text-xl font-semibold mb-2">Understanding React Hooks</h3>
                        <p className="text-gray-600 mb-4">A deep dive into React Hooks and how to use them effectively in your projects.</p>
                        <button className="btn btn-primary bg-violet-700 rounded-none text-white  transform hover:scale-105 transition-transform">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-lg  overflow-hidden">
                    <img src={sampleImage} alt="CSS Grid vs. Flexbox" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <p className="text-gray-500 mb-2">June 20, 2024</p>
                        <h3 className="text-xl font-semibold mb-2">CSS Grid vs. Flexbox</h3>
                        <p className="text-gray-600 mb-4">A comparison of CSS Grid and Flexbox, and when to use each for layout design.</p>
                        <button className="btn btn-primary bg-violet-700 rounded-none text-white  transform hover:scale-105 transition-transform">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-lg  overflow-hidden">
                    <img src={sampleImage} alt="JavaScript ES2021 Features" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <p className="text-gray-500 mb-2">June 15, 2024</p>
                        <h3 className="text-xl font-semibold mb-2">JavaScript ES2021 Features</h3>
                        <p className="text-gray-600 mb-4">Explore the new features introduced in ECMAScript 2021 and how they can.</p>
                        <button className="btn btn-primary bg-violet-700 rounded-none text-white  transform hover:scale-105 transition-transform">
                            Read More
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Blogs;
