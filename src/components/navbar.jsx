import { useState } from 'react'
import { Link } from "react-router-dom"
import logoCafe from "../assets/logo-cafe.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-dark-blue text-white p-4 h-24 flex items-center font-semibold z-10">
            <div className="flex justify-between w-full items-center">
                <img className="h-full max-h-24" src={logoCafe} alt="Logo Cozy Cafe" />

                <div className='lg:hidden text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes/> : <FaBars/>}
                </div>

                <ul className="hidden lg:flex space-x-15 ml-72">
                    <li className="text-white hover:text-yellow-400 cursor-pointer"><Link to={"/"}>Home</Link></li>
                    <li className="text-white hover:text-yellow-400 cursor-pointer"><Link to={"/Menu"}>Menu</Link></li>
                    <li className="text-white hover:text-yellow-400 cursor-pointer"><Link to={"/About"}>About</Link></li>
                    <li className="text-white hover:text-yellow-400 cursor-pointer"><Link to={"/Gallery"}>Gallery</Link></li>
                    <li className="text-white hover:text-yellow-400 cursor-pointer"><Link to={"/Contact"}>Contact</Link></li>
                </ul>
                <Link to={"/Login"} className='hidden lg:block'>
                    <button className="bg-yellow-500 py-2 px-4 ml-6 text-black rounded-sm hover:bg-yellow-600">
                        Login
                    </button>
                </Link>
            </div>

            {isOpen && (
                <div className='lg:hidden absolute top-24 right-0 w-[400px] bg-dark-blue flex flex-col items-start space-y-4 p-6 '>
                    <Link to='/' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/Menu' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to='/About' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to='/Gallery' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to='/Contact' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to='/Login' className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
                    <button className='bg-yellow-500 py-2 px-4 text-black rounded-sm hover:bg-yellow-600'>
                        Login
                    </button>
                    </Link>
                </div>
            )}
        </nav>
        </>
    )
}

export default Navbar