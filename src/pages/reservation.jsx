import { useState } from 'react'
import fotoAbout from "../assets/foto-about.jpg"
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Reservation() {
    return(
        <>
        <Navbar />

        <section class="relative pt-24 bg-dark-blue h-56 flex justify-center items-center">
            <h1 class="font-bold text-3xl md:text-4xl text-white">Table Reservation </h1>
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
            <div class="flex justify-center items-center">
                <img class="w-full max-w-md md:max-w-lg h-full object-cover rounded-2xl" src={fotoAbout} alt="" />
            </div>
            <form class="flex flex-col pr-4" action="">
                <input class="border rounded-lg h-10 p-4 mb-4" type="text" placeholder="Your Name" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="text" name="" id="" placeholder="Phone Number" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="email" name="" id="" placeholder="Your Email" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="date" name="" id="" placeholder="dd/mm/yy" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="time" placeholder="Time" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="number" name="" id="" placeholder="Number of Guests" />
                <input class="border rounded-lg h-10 p-4 mb-4" type="text" placeholder="Subject" />
                <textarea class="border rounded-lg h-28 p-4 mb-4" name="" id="" placeholder="Message"></textarea>
                <button class="bg-yellow-500 w-40 h-10 text-black rounded-sm hover:bg-yellow-600">
                    Make a Reservation
                </button>
            </form>
        </section>

        <Footer />

        </>
    )
}

export default Reservation