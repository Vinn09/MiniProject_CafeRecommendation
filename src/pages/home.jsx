import { useState } from 'react'
import fotoAbout from "../assets/foto-about.jpg";
import customer from "../assets/cust-1.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Testimonial from '../components/testimonial';
import Features from '../components/features';

function Home() {

  return (
    <>
    <Navbar />
      <section class="relative w-full min-h-screen bg-cover bg-center bg-dark-blue pt-24 overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 h-full items-center justify-center m-4">

            <div class="flex flex-col justify-center items-start text-white text-left ">
                <h1 class="font-bold text-4xl md:text-5xl text-white">
                    Enjoy the Rich Flavors of Coffee & Delicious Dishes at Cozy Cafe.
                </h1>
                <p class="text-white text-xl md:text-2xl mt-4">
                    Perfect Hangout Spot with the Best Coffee & Food!
                </p>
                <div class="mt-6">
                    <button class="bg-white px-4 py-2 font-normal text-black rounded-sm hover:bg-gray-300 transition">
                        Menu
                    </button>
                    <a href="reservation.html">
                        <button class="bg-yellow-500 px-4 py-2 ml-3 font-normal text-black rounded-sm hover:bg-yellow-600 transition">
                        Reservation
                    </button>
                    </a>
                    
                </div>
            </div>
            
            <div class="flex justify-center pt-4">
                <img class="w-full max-w-md md:max-w-lg h-auto object-cover rounded-3xl" src="https://media.timeout.com/images/106116199/750/562/image.jpg" alt="Cozy Cafe"></img>
            </div>
        </div>
      </section>

     <section class="bg-white">
      <div className='mt-8'>
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div class="flex justify-center items-center mt-4">
                <img class="w-full max-w-md md:max-w-lg h-full object-cover rounded-2xl" src={fotoAbout} alt=""></img>
            </div>

            <div class="bg-yellow-500 h-full rounded-l-3xl p-6 mt-4">
                <h2 class="font-bold text-4xl mb-4">Cozy Cafe</h2><br />
                <p>Welcome to Cozy Cafe, your perfect spot to relax, unwind, and enjoy the best
                flavors in town. Whether you're craving a rich, aromatic coffee, a hearty meal,
                or a delightful dessert, we've got something special for you.</p><br />

                <p>At Cozy Cafe, we believe that great food and drinks bring people together. Our 
                warm and inviting atmosphere makes it the ideal place to catch up with friends,
                work in peace, or simply take a break from your busy day.</p>
            </div>
        </div>
      </div>
        
     </section>

    <section class="mt-8 p-8">
        <h2 class="font-bold text-4xl mb-12 text-center">Why Choose Cozy Cafe</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Features image ="https://cdn-icons-png.flaticon.com/512/751/751621.png" feature="Premium Coffe" desc="Freshly brewed with high-quality beans for the perfect cup." />
            <Features image ="https://cdn-icons-png.flaticon.com/512/562/562678.png" feature="Delicious Meals" desc="Freshly brewed with high-quality beans for the perfect cup." />
            <Features image ="https://cdn-icons-png.flaticon.com/512/1974/1974058.png" feature="Relaxing Ambiance" desc="A cozy, stylish space designed for comfort and enjoyment." />
            <Features image ="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" feature="Friendly Service" desc="Our team is dedicated to making you feel at home." />
        </div>
        
    </section>

    <section class="mt-8">
        <h2 class="font-bold text-4xl mb-12 text-center">What Our Customers Say About Cozy Cafe</h2>
        <div class="m-8 grid grid-cols-1 md:grid-cols-3 gap-6">    
            <Testimonial image={customer} name="Sarah Angelia" rate="4.5" review="Cozy Cafe is my go-to place for coffee and good food! The atmosphere is warm and inviting, perfect for working or just relaxing. Their cappuccino is a must-try!" />
            <Testimonial image={customer} name="Sarah Angelia" rate="4.5" review="Cozy Cafe is my go-to place for coffee and good food! The atmosphere is warm and inviting, perfect for working or just relaxing. Their cappuccino is a must-try!" />
            <Testimonial image={customer} name="Sarah Angelia" rate="4.5" review="Cozy Cafe is my go-to place for coffee and good food! The atmosphere is warm and inviting, perfect for working or just relaxing. Their cappuccino is a must-try!" />
        </div>
    </section>

    <Footer />
    </>
  )
}

export default Home
