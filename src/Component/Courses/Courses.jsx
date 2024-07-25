

const Courses = () => {
    return (
        <div className="max-w-6xl mx-5 lg:mx-auto">
            <h2 className=" text-3xl font-semibold ">My Courses</h2>
            <p className="mb-10 text-lg">Here I mentioned those technologies that I love to work with.</p>
            <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                <div className=" bg-white rounded-none shadow  shadow-gray-600">
                    <figure>
                        <img
                            src='https://www.nextelacademy.com/wp-content/uploads/2024/02/web-development.jpg'
                            alt="Front End Web Development Course" />
                    </figure>
                    <div className="pl-5 pr-4 py-4">
                        <h2 className="card-title font-bold mb-2 text-black">Front-end Web Development</h2>
                        <p>Track Taka is an expense tracker application built on React JS, TailwindCSS, IndexedDB, and Firebase...</p>
                        <div>
                            <a href="https://www.nextelacademy.com/courses/front-end-web-development-course/" target="_blank">
                                <button className='btn btn-sm my-3 rounded-none bg-violet-600 text-white'>See Details</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div className=" bg-white rounded-none shadow  shadow-gray-600">
                    <figure>
                        <img
                            src='https://www.nextelacademy.com/wp-content/uploads/2024/03/Html-fundamental-to-wordpress-thumbnail-1-scaled.jpg'
                            alt="Front End Web Development Course" />
                    </figure>
                    <div className="pl-5 pr-4 py-4">
                        <h2 className="card-title text-xl font-bold mb-2 text-black">Html To WordPress Fundamental</h2>
                        <p>Track Taka is an expense tracker application built on React JS, TailwindCSS, IndexedDB, and Firebase...</p>
                        <div>
                            <a href="https://www.nextelacademy.com/courses/html-fundamental-to-wordpress/" target="_blank">
                            <button className='btn btn-sm my-3 rounded-none bg-violet-600 text-white'>See Details</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div className=" bg-white rounded-none shadow  shadow-gray-600">
                    <figure>
                        <img
                            src='https://www.nextelacademy.com/wp-content/uploads/2024/05/All-in-one-earning-course-scaled.jpg' />
                    </figure>
                    <div className="pl-5 pr-4 py-4">
                        <h2 className="card-title font-bold mb-2 text-black">All in one Earning Course</h2>
                        <p>Track Taka is an expense tracker application built on React JS, TailwindCSS, IndexedDB, and Firebase...</p>
                        <div>
                            <a href="https://www.nextelacademy.com/courses/all-in-one-earning-course/" target="_blank">
                            <button className='btn btn-sm my-3 rounded-none bg-violet-600 text-white'>See Details</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;