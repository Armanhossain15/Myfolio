
const Footer = () => {
    return (
        <footer className="footer bg-gray-950  text-white p-10">
            <aside>
                <h1 className="bg-violet-600 text-3xl p-3 font-bold rounded-md text-white">AH</h1>
                <p>
                   Arman Hossain Azad.
                    <br />
                    Web Developer At Nextel IT And Web Developer at Nextel Academy
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Web Design</a>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">Wordpress Website</a>
                <a className="link link-hover">MERN Website</a>
            </nav>
            <nav>
                <h6 className="footer-title">Pages</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Blogs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;