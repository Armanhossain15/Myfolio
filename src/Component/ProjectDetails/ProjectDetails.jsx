
// import { useEffect, useState } from 'react';
// import {  useParams  } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import {  useLoaderData  } from 'react-router-dom';

const ProjectDetails = () => {
    // const projectName = useParams()
    // const [currentItem, setCurrentItem] = useState({})
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/projects/${projectName}`)
    //     .then(res => res.json())
    //     .then(data => setCurrentItem(data))
    // },[projectName])

    const currentItem = useLoaderData()
    const {image, title , live_link, source_code, technologies, description} = currentItem
    return (
        <div className="max-w-6xl mx-5 lg:mx-auto pt-4 pb-14">
            <h2 className="card-title text-5xl mb-5 font-bold">{title}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-8'>
                <div className="lg:col-span-2">
                    <figure>
                        <img className="border border-gray-400 "
                            src={image}
                            alt={title} />
                    </figure>
                    <div className=" mt-5 space-y-5">
                        <p className='text-lg'>{description}</p>
                    </div>
                </div>
                <div className=' lg:col-span-1'>
                    <h3 className='text-xl'>Live Link</h3>
                    <p className='bg-gray-300 p-3 mt-2 flex justify-between'>{live_link} <FiExternalLink className="cursor-pointer bg-violet-600 text-white p-1 text-3xl" /></p>
                    <h3 className='text-xl mt-6'>Source Code</h3>
                    <p className='bg-gray-300 p-3 mt-2 flex justify-between items-center text-sm'>{source_code} <FiExternalLink className="cursor-pointer bg-violet-600 text-white p-1 text-3xl" /></p>
                    <section className="mt-5">
                        <div className='mt-6 grid grid-cols-2 gap-6 text-center'>
                            {
                                technologies?.map((item, index) => <p className='bg-gray-600 hover:bg-gray-700 text-white py-3' key={index}>{item}</p>)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;