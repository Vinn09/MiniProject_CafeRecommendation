import { useState } from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import fotoAbout from "../assets/foto-about.jpg"

function About() {
    return (
        <>
        <Navbar />

        <section class="relative pt-24 bg-dark-blue h-56 flex justify-center items-center">
            <h1 class="font-bold text-3xl md:text-4xl text-white">About Us</h1>
        </section>

        <section class="mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                <div class="flex justify-center items-center mt-4">
                    <img class="w-full max-w-md md:max-w-lg h-full object-cover rounded-2xl" src={fotoAbout} alt="" />
                </div>

                <div class="bg-yellow-500 h-full rounded-l-3xl p-6 mt-4">
                    <h2 class="font-bold text-4xl mb-4">Our Story and History</h2><br />
                    <p>
                        Cozy Cafe was born from a deep love for high-quality coffee, delicious food, and a warm, inviting atmosphere.
                        Established in 2018, our journey began with a simple idea: to create a place where people can escape the hustle 
                        and bustle of daily life, relax with a cup of perfectly brewed coffee, and enjoy delightful meals in a cozy setting.
                    </p>

                    <p>What started as a small neighborhood café quickly grew into a favorite spot for coffee lovers, food enthusiasts,
                        and those seeking a peaceful retreat. With a passion for excellence, we carefully source the finest coffee beans,
                        handpick fresh ingredients, and craft a menu that caters to every palate.
                    </p>
                    
                    <p>
                        At Cozy Cafe, we believe that a café is more than just a place to grab a drink—it's a community hub where friendships 
                        are formed, ideas are shared, and special moments are created. Whether you're here to start your day with a rich espresso, 
                        enjoy a leisurely brunch, or unwind with a dessert after a long day, we are committed to making every visit a memorable experience.
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-8 mx-8">
            <h2 class="font-bold text-4xl mb-4 text-center">Our Mission and Vision</h2><br />
            <div class="grid grid-cols-1 md:grid-cols-2"> 
                <div>
                    <div class="mb-4">
                        <h3 class="mb-2 font-bold">Mission</h3>
                        <p>
                            To be the most beloved café in town, known for its exceptional coffee, delicious food, and a warm, welcoming environment that brings people together. 
                        </p>
                    </div>
                    <div>
                        <h3 class="mb-2 font-bold">Vision</h3>
                        <ul>
                            <li class="flex mb-4">
                                <img class="h-6 w-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/8832/8832108.png" alt="" />
                                <p><span class="font-semibold">Serving Quality</span> – We are dedicated to providing the finest coffee and meals using only the best ingredients.</p>
                            </li>
                            <li class="flex mb-4">
                                <img class="h-6 w-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/8832/8832108.png" alt="" />
                                <p><span class="font-semibold">Creating Comfort</span> – Our café is designed to be a space where everyone feels at home, whether they’re working, socializing, or relaxing.</p>
                            </li>
                            <li class="flex mb-4">
                                <img class="h-6 w-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/8832/8832108.png" alt="" />
                                <p><span class="font-semibold">Delivering Excellence</span> – We aim to offer top-notch service with a smile, ensuring every customer leaves with a happy heart.</p>
                            </li>
                            <li class="flex mb-4">
                                <img class="h-6 w-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/8832/8832108.png" alt="" />
                                <p><span class="font-semibold">Sustainability Matters</span> – We strive to be environmentally responsible, sourcing ethically produced coffee and using eco-friendly practices.</p>
                            </li>
                        </ul>


                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <img class="w-full max-w-md md:max-w-lg h-full object-cover rounded-2xl" src="https://culinaria.id/wp-content/uploads/2024/07/table-service-1080x675.webp" alt="" />
                </div> 
            </div>
        </section>

        <section class="mt-8 p-8">
            <h2 class="font-bold text-4xl mb-12 text-center">Why Choose Cozy Cafe?</h2>
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
                    <img class="w-30 h-30 mb-8 opacity-50" src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt="" />
                    <h3 class="font-semibold text-2xl">Friendly Service</h3>
                    <p class="text-center">Our team is dedicated to making you feel at home.</p>
                </div>
            </div>
        </section>

        <Footer />
        </> 
    )
}

export default About