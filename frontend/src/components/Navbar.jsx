import { Link } from "react-router-dom"
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    return (
        <>
        <nav className="flex justify-between">
            <ul className="flex items-center ml-24">
                <MdLogin className="fill-blue-500 text-4xl"/>
            </ul>
            <ul className="flex justify-end items-center space-x-10 m-2 mt-4 mr-24 font-semibold text-xl">
                <li><Link to="/" className="p-2 text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:rounded-md">Home</Link></li>
                <li><Link to="/about" className="p-2 text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:rounded-md">About</Link></li>
                <li><Link to="/contact" className="p-2 text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:rounded-md">Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar