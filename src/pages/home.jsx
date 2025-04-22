import { useState } from 'react'
import fotoAbout from "../assets/foto-about.jpg";
import customer from "../assets/cust-1.jpg";
import Navbar from '../components/navbar';

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
            <div class="flex flex-col items-center">
                <img class="w-30 h-30 mb-8 opacity-50" src="https://cdn-icons-png.flaticon.com/512/751/751621.png" alt="" />
                <h3 class="font-semibold text-2xl">Premium Coffe</h3>
                <p class="text-center">Freshly brewed with high-quality beans for the perfect cup.</p>
            </div>
            <div class="flex flex-col items-center">
                <img class="w-30 h-30 mb-8 opacity-50" src="https://cdn-icons-png.flaticon.com/512/562/562678.png" alt="" />
                <h3 class="font-semibold text-2xl">Delicious Meals</h3>
                <p class="text-center">Freshly brewed with high-quality beans for the perfect cup.</p>
            </div>
            <div class="flex flex-col items-center">
                <img class="w-30 h-30 mb-8 opacity-50" src="https://cdn-icons-png.flaticon.com/512/1974/1974058.png" alt="" />
                <h3 class="font-semibold text-2xl">Relaxing Ambiance</h3>
                <p class="text-center">A cozy, stylish space designed for comfort and enjoyment.</p>
            </div>
            <div class="flex flex-col items-center">
                <img class="w-30 h-30 mb-8 opacity-50" src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt=""></img>
                <h3 class="font-semibold text-2xl">Friendly Service</h3>
                <p class="text-center">Our team is dedicated to making you feel at home.</p>
            </div>
        </div>
        
    </section>

    <section class="mt-8">
        <h2 class="font-bold text-4xl mb-12 text-center">What Our Customers Say About Cozy Cafe</h2>
        <div class="m-8 grid grid-cols-1 md:grid-cols-3 gap-6">    
            <div class="bg-gray-300 p-4 rounded-2xl">
                <div class="flex items-center space-x-4">
                    <img class="w-16 h-16 rounded-full border" src={customer} alt="" />
                    <div>
                        <p class="font-semibold">Sarah Angelia</p>
                        <p>Rate: 4.5/5.0</p>
                    </div>
                </div>
                <div class="mt-4">"Cozy Cafe is my go-to place for coffee and good food! The
                    atmosphere is warm and inviting, perfect for working or just relaxing. 
                    Their cappuccino is a must-try!"
                </div>
            </div>
            <div class="bg-gray-300 p-4 rounded-2xl">
                <div class="flex items-center space-x-4">
                    <img class="w-16 h-16 rounded-full border" src={customer} alt="" />
                    <div>
                        <p class="font-semibold">Sarah Angelia</p>
                        <p>Rate: 4.5/5.0</p>
                    </div>
                </div>
                <div class="mt-4">"Cozy Cafe is my go-to place for coffee and good food! The
                    atmosphere is warm and inviting, perfect for working or just relaxing. 
                    Their cappuccino is a must-try!"
                </div>
            </div>
            <div class="bg-gray-300 p-4 rounded-2xl">
                <div class="flex items-center space-x-4">
                    <img class="w-16 h-16 rounded-full border" src={customer} alt="" />
                    <div>
                        <p class="font-semibold">Sarah Angelia</p>
                        <p>Rate: 4.5/5.0</p>
                    </div>
                </div>
                <div class="mt-4">"Cozy Cafe is my go-to place for coffee and good food! The
                    atmosphere is warm and inviting, perfect for working or just relaxing. 
                    Their cappuccino is a must-try!"
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-dark-blue text-white p-4 mt-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 ml-8">
            <div>
                <h3 class="text-yellow-500 font-semibold mb-2">About Us</h3>
                <p>Welcome to Cozy Cafe, your perfect spot to relax, unwind, and enjoy the best
                flavors in town. Whether you're craving a rich, aromatic coffee, a hearty meal,
                or a delightful dessert, we've got something special for you.</p>
            </div>
            
            <div>
                <h3 class="text-yellow-500 font-semibold mb-2">Contact Us</h3>
                <ul>
                    <li class="flex mb-4">
                        <img class="h-6 w-6 filter invert mr-4" src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt="" />
                        <p>Jl. LocationCafe No.12</p>
                    </li>
                    <li class="flex mb-4">
                        <img class="h-6 w-6 filter invert mr-4" src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="" />
                        <p>+021345678</p>
                    </li>
                    <li class="flex">
                        <img class="h-6 w-6 filter invert mr-4" src="https://cdn-icons-png.flaticon.com/512/646/646094.png" alt="" />
                        <p>cozycafe12@company.com</p>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-yellow-500 font-semibold mb-2">Open Hours</h3>
                <ul>
                    <li>Monday to Friday : 9 AM - 10 PM</li>
                    <li>Saturday to Sunday : 7 AM - 10 PM</li>
                </ul>
            </div>

            <div>
                <h3 class="text-yellow-500 font-semibold mb-2">Social Media</h3>
                <ul class="flex space-x-4">
                    <li>
                        <img class="h-6 w-6 filter invert" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="" />
                    </li>
                    <li>
                        <img class="h-6 w-6 filter invert" src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="" />
                    </li>
                    <li>
                        <img class="h-6 w-6 filter invert" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
                    </li>
                    <li>
                        <img class="h-6 w-6 filter invert" src="https://cdn-icons-png.flaticon.com/512/104/104093.png" alt="" />
                    </li>
                </ul>
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default Home
