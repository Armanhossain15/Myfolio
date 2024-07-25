// import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";



const AddProjects = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/projects`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
        .then(res => res.json())
        .then(data => console.log('project posted', data))
    }
    return (
        <div className=" pt-4 md:pt-8 pb-12 md:pb-24">
            <div className="">
                <div className="w-5/6  mx-auto    card-body">
                    <h1 className="text-3xl text-center font-bold mb-5">Add Projects</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                            <div className="flex-1">
                                <div className="form-control flex-1 mb-4">
                                    <input {...register("title", { required: true })} type="text" name="title" placeholder="Type your project title" className=" input input-bordered border-[1px] border-gray-600" />
                                    {errors.title && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control flex-1 mb-4">
                                    <input {...register("coverLink", { required: true })} type="text" name="coverLink" placeholder="Type your project cover link" className=" input input-bordered border-[1px] border-gray-600" />
                                    {errors.coverLink && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control flex-1 mb-4">
                                    <input {...register("ProjectLiveLink", { required: true })} type="text" name="ProjectLiveLink" placeholder="Type your project live_link" className=" input input-bordered border-[1px] border-gray-600" />
                                    {errors.ProjectLiveLink && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control flex-1 mb-4">
                                    <input {...register("source_code_Link", { required: true })} type="text" name="source_code_Link" placeholder="Type your project source_code Link" className=" input input-bordered border-[1px] border-gray-600" />
                                    {errors.source_code_Link && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="form-control flex-1 mb-4">
                                    <input {...register("technologies", { required: true })} type="text" name="technologies" placeholder="Type your uses technologies" className=" input input-bordered border-[1px] border-gray-600" />
                                    {errors.technologies && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control flex-1 mb-4">
                                    <textarea {...register("Description", { required: true })} name="Description" id="" className="textarea-bordered border-[1px] border-gray-600 rounded-md bg-transparent p-4" placeholder="Type your project Description " rows={6}></textarea>
                                    {errors.Description && <span className="text-sm mt-1 text-red-600">This field is required</span>}
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-2">
                            <input className="btn bg-violet-700 hover:bg-violet-800 text-white  text-base" type="submit" value="Add Project" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProjects;