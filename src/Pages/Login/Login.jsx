import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const [passVisible, setPassVisible] = useState(false)
    const {LogInUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // const checked = e.target.terms.checked
        // console.log(email, password, checked)
        
        LogInUser(email, password)
        .then(res => {
            console.log('user login', res.user);
        })
        .catch(error=> {
            console.log(error);
        })

        
    }
    return (
        <div className=" pt-8 pb-24">
            <div className="">
                <div className="w-[90%] lg:w-2/5 mx-auto    card-body">
                    <div>
                        <button className="btn  bg-transparent  w-full btn-outline"> <FcGoogle className="text-2xl" />Sign In With Goggle</button>
                    </div>
                    <div className="divider">OR</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control flex-1 mb-4">

                            <input type="email" name="email" placeholder="Type your email" className=" input input-bordered border-[1px] border-gray-600" required />
                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2 border-[1px] border-gray-600">
                                <input
                                    type={
                                        passVisible ? 'text' : 'password'
                                    }
                                    className="grow"
                                    placeholder="Type your Password"
                                    name="password" />
                                <span
                                    onClick={() => setPassVisible(!passVisible)}
                                    className="text-2xl -ml-16 ">
                                    {
                                        passVisible ? <FiEyeOff /> : <FiEye />
                                    }

                                </span>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="py-4 flex items-center gap-2">
                            <input type="checkbox" name="terms" className="checkbox checkbox-sm" /> <span>I agree to the <Link className=" underline">Terms, and Privecy Policy</Link> </span>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-violet-700 hover:bg-violet-800 text-white  text-base">Login</button>
                        </div>

                        <p className="mt-3 text-center">Do not have account ? <Link to='/register' className="font-bold underline ">Sign Up</Link></p>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;