import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const logout = ()=>{
        userLogOut()
        .then(()=>{
            console.log('user Log Out Successfully');
        })
        .catch(error=> {
            console.log(error);
        })
    }
    const navItem = <>
        <Link to=''><li className="text-lg"><a>Home</a></li></Link>
        <Link to='/about'><li className="text-lg"><a>About</a></li></Link>
        <Link to='/ProjectsPage'><li className="text-lg"><a>Projects</a></li></Link>
        <Link to='/blog'><li className="text-lg"><a>Blog</a></li></Link>
        <Link to='/addproject'><li className="text-lg"><a>Addproject</a></li></Link>
    </>
    return (
        <div className="py-3">
            <div className="navbar bg-transparent max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <h1 className="bg-violet-600 text-2xl lg:text-3xl p-2 lg:p-3 font-bold rounded-md text-white">AH</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div>
                            <details className="dropdown dropdown-end">
                                <summary className=" m-1">
                                    <div className="avatar ">
                                        <div className="w-12 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>Deshboard</a></li>
                                    <li onClick={logout}><a>Logout</a></li>
                                </ul>
                            </details>
                        </div> : <div>
                            <Link to={'/login'}>
                                <a className="btn mr-5 border-2 border-violet-700 bg-transparent text-black transform rounded-none    lg:px-7 px-4">Login</a>
                            </Link>
                            <Link to={'/contact'}>
                                <a className="btn bg-violet-700 text-white transform rounded-none    lg:px-7 px-4 border-none">Contact Now</a>
                            </Link>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;