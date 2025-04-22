import { useState } from 'react'
import logoCafe from "../assets/logo-cafe.png";

function Navbar() {
    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-dark-blue text-white p-4 h-24 flex items-center font-semibold z-10">
            <div className="flex flex-row justify-between w-full items-center">
                <img className="h-full max-h-24" src={logoCafe} alt="Logo Cozy Cafe" />
                <ul className="flex space-x-15 ml-72">
                    <a href="#"><li className="text-white hover:text-yellow-400 cursor-pointer">Home</li></a>
                    <a href="#"><li className="text-white hover:text-yellow-400 cursor-pointer">Menu</li></a>
                    <a href="#"><li className="text-white hover:text-yellow-400 cursor-pointer">About</li></a>
                    <a href="#"><li className="text-white hover:text-yellow-400 cursor-pointer">Gallery</li></a>
                    <a href="#"><li className="text-white hover:text-yellow-400 cursor-pointer">Contact</li></a>
                </ul>
                <a href="#">
                    <button className="bg-yellow-500 py-2 px-4 ml-6 text-black rounded-sm hover:bg-yellow-600">
                      Reservation
                    </button>
                </a>
            </div>
        </nav>
        </>
    )
}

export default Navbar