import { Link, useLoaderData, useParams } from "react-router-dom";
import courseAdsimg from './../../assets/logo/hossain arman course.jpg'
import { useEffect, useState } from "react";
import BlogReview from "./BlogReview";

const Blogdetails = () => {
    const { _id } = useParams()
    //reviews load by useeffect

    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    // console.log(reviews);

    // console.log(typeof id);
    // const currentBlogsReviews = reviews?.filter(item => item?.blogid === parseInt(_id))

    // console.log('currentBlogsReviews', currentBlogsReviews);


    const allBlogData = useLoaderData([])
    // console.log('allBlogData', allBlogData);
    // console.log('id',_id);
    const currentBlog = allBlogData?.filter(blog => blog?._id === _id)
    const otherBlogs = allBlogData?.filter(blog => blog?._id !== _id)
    // console.log(otherBlogs);

    const { image, title, keywords, description } = currentBlog[0]





    return (
        <div className="max-w-6xl mx-5 lg:mx-auto pt-4 pb-14">
            <h2 className="card-title text-3xl lg:text-5xl mb-5 font-bold">{title}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-8'>
                <div className="lg:col-span-2">
                    <figure>
                        <img className="border border-gray-400 "
                            src={image}
                            alt={title} />
                    </figure>
                    {/* description */}
                    <div className=" mt-5 space-y-5">
                        <p className='text-lg'>{description}</p>
                    </div>

                    {/* key words show section */}
                    <section className="mt-5">
                        <div className='mt-6  '>
                            {
                                keywords?.map(item => <p className='btn btn-link py-3'>{item}</p>)
                            }
                        </div>
                    </section>
                    {/* reviews show section */}
                    <section className="mt-5">
                        {/* {
                            currentBlogsReviews?.map(review => <BlogReview key={review.id} review={review}></BlogReview>)
                        } */}


                    </section>
                </div>
                <div className='hidden lg:block lg:col-span-1'>
                    <h3 className='text-4xl font-bold mb-7 underline'>Other Blogs</h3>
                    {
                        otherBlogs?.map(item => <Link to={`/blogs/${item?._id}`} key={item?._id}><p className="text-base underline mb-5 cursor-pointer">{item?.title}</p></Link>)
                    }
                    <div className="border-2 border-violet-600 p-3 py-6 text-center">
                        <h3 className='text-3xl font-bold mb-7 underline'>Explore My Courses</h3>
                        <img className=" hover:scale-105 " src={courseAdsimg} alt="hossain arman course" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-4  mt-12 ">Type your Comment</h1>
                <form className="">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 ">
                        <input type="text" placeholder="Your Name" className="input-sm p-5 w-full  border border-gray-600" />
                        <input type="text" placeholder="Your Email" className="input-sm p-5 w-full border border-gray-600" />
                    </div>
                    <textarea placeholder="Type comment" name="" id="" className="w-full textarea-bordered mt-6 border border-gray-600 p-5" rows={7}></textarea>
                    <input type="submit" value="Submit" className="btn px-8 bg-violet-600 text-white rounded-none mt-4 hover:bg-violet-800" />
                </form>
            </div>
        </div>
    );
};

export default Blogdetails;