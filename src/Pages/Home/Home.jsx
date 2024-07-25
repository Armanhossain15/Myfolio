import Banner from "../../Component/Banner/Banner";
import Courses from "../../Component/Courses/Courses";
import MernProjects from "../../Component/FeatureProjects/MernProjects/MernProjects";
// import PartnersLogo from "../../Component/Partners/PartnersLogo";
import Reviews from "../../Component/Reviews/Reviews";
// import ServiceCard from "../../Component/ServiceCards/ServiceCard";
import Skills from "../../Component/Skills/Skills";
// import SkillsLogo from "../../Component/SkillsLogo/SkillsLogo";


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <SkillsLogo/> */}
            <Skills/>
            {/* <PartnersLogo/> */}
            {/* <ServiceCard/> */}
            <MernProjects/>
            <Courses/>
            {/* <Reviews/> */}
        </div>
    );
};

export default Home;