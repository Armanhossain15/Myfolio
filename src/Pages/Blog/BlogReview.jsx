import ReviewAvator from './../../assets/logo/profile pic.jpg'


const BlogReview = ({review}) => {
    const {text} = review
    return (
        <div className="flex items-start gap-4 mt-10" >
            <img src={ReviewAvator} className="avatar w-14 rounded-full shadow" alt="" />
            <div>
                <h4 className="font-bold text-base">Arman Hossain</h4>
                <p className="w-full lg:w-3/4">{text}</p>
            </div>
        </div>
    );
};

export default BlogReview;