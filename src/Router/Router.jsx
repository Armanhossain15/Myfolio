import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact Page/Contact";
import Blogs from "../Pages/Blog/Blogs";
import ProjectsPage from "../Pages/AllProjects/ProjectsPage";
import ProjectDetails from "../Component/ProjectDetails/ProjectDetails";
import Blogdetails from "../Pages/Blog/Blogdetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProjects from "../Pages/AddProjects/AddProjects";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/projects/:projectName',
                element: <ProjectDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.projectName}`)
            },
            {
                path: '/ProjectsPage',
                element: <ProjectsPage />,
            },

            {
                path: '/blogs/:_id',
                element: <Blogdetails />,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: '/blog',
                element: <Blogs />
            },
            {
                path: '/addproject',
                element: <AddProjects />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]

    }
])

export default Router;