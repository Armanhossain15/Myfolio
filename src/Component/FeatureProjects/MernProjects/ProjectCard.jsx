import { MdMenuBook } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { VscSourceControl } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
    // console.log(item);
    const {image, title , live_link, source_code, technologies, description} = item
    // console.log(technologies);
    return (
        <div className=" bg-white  rounded-none shadow  shadow-gray-600">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="pl-5 pr-3 py-2">
                <h2 className="card-title text-2xl mb-2">{title}</h2>
                <p>{description}</p>
                <div className=" flex justify-between text-2xl mt-4">
                    <div className="cursor-pointer">
                        <Link to={`projects/${title}`}>
                        <MdMenuBook />
                        </Link>
                    </div>
                    <div className="flex gap-x-4 ">
                        <a href={live_link} target="_blank"><FiExternalLink className="cursor-pointer" /></a>
                        <a href={source_code} target="_blank"> <VscSourceControl className="cursor-pointer" /></a>
                    </div>
                </div>
                <div className="flex gap-x-1 mt-3 text-sm text-gray-500">
                    {
                        technologies?.map((item, index) => <p className="mr-1"  key={index}>{item}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
