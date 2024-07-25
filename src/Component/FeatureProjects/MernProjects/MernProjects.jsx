
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const MernProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res=> res.json())
        .then(data => setProjects(data))
    },[])
    // console.log('projects', projects);
    return (
        <div className="max-w-6xl mx-5  lg:mx-auto py-10">
            <div>
                <h2 className=" text-3xl font-semibold mb-2">Feature Projects</h2>
                <p className="w-full md:w-2/4">These are some examples of my projects and whenever I get some free-time I’d like to think about my next project</p>
            </div>
            <div className="my-7  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects?.map(item => <ProjectCard
                                            key={projects.id}
                                            item={item}
                                                ></ProjectCard>)
                }
                
            </div>
        </div>
    );
};

export default MernProjects;