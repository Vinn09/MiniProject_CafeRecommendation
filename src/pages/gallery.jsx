import { useState } from 'react'
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Gallery(){
    return(
        <>
        <Navbar />

        <section class="relative pt-24 bg-dark-blue h-56 flex justify-center items-center">
            <h1 class="font-bold text-3xl md:text-4xl text-white">Gallery</h1>
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto1} alt="" />
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto2} alt="" />
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto3} alt="" />
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto4} alt="" />
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto5} alt="" />
            <img class="h-full rounded-2xl hover:opacity-90 hover:scale-105" src={foto6} alt="" />
        </section>

        <Footer />
        </>
    )
}

export default Gallery