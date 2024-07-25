import { Link } from 'react-router-dom';
import sampleImage from './../../assets/logo/sample-image.jpg.jpg';


const Blogcard = ({ blog }) => {
    // console.log(blog);
    const { image, title, description, keywords, published_date, _id } = blog
    return (
        <div className="bg-white shadow-lg  overflow-hidden" >
            <img src={sampleImage} alt="Understanding React Hooks" className="w-full h-48 object-cover" />
            <div className="p-6">
                <p className="text-gray-500 mb-2">{published_date}</p>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description?.slice(0, 78)}...</p>
                <Link to={`/blogs/${_id}`}>
                    <button className="btn btn-primary bg-violet-700 rounded-none text-white  transform hover:scale-105 transition-transform"> Read More </button>
                </Link>
            </div>
        </div>
    );
};

export default Blogcard;