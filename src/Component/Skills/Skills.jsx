

const Skills = () => {
    return (
        <div className="max-w-6xl mx-5 lg:mx-auto py-14">
            <h2 className=" text-3xl font-semibold ">My Skills</h2>
            <p className="mb-10 text-lg">Here I mentioned those technologies that I love to work with.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Html</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Css</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Javascript</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">React Js</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Bootstrap</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">TailwindCSS</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Firebase</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">INTERMEDIATE</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Node Js</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">INTERMEDIATE</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Mongo DB</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">INTERMEDIATE</button>
                </div>
                
            </div>
            <div className="divider my-10"><button className="btn btn-sm rounded-none bg-violet-700 text-white ">Other Skill</button></div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Wordpress</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Theme Customization</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Elementor</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Woocommerce</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                <div className="flex justify-between items-center bg-gray-300 p-4">
                    <h1 className="text-xl font-medium">Figma To Wordpress</h1>
                    <button className="btn btn-sm rounded-none bg-violet-700 text-white">EXPERT</button>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;