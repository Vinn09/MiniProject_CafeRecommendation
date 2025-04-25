import { useState } from 'react'
import dessert from "../assets/dessert.jpg";
import drinks from "../assets/drinks.png"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MenuItem from '../components/menuItem';

function Menu() {
    return(
        <>
        <Navbar />

        <section class="relative pt-24 bg-dark-blue h-56 flex justify-center items-center">
            <h1 class="font-bold text-3xl md:text-4xl text-white">Our Menu </h1>
        </section>

        <section class="mt-8">
            <div>
                <h3 class="font-bold text-3xl text-center mb-8">Foods</h3>
                <div class="mx-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1}/>
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1} />
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1} />
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1} />
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1} />
                    <MenuItem name="French Toast" price="45.000" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!" type={1} />
                </div>
            </div>

            <div class="mt-12">
                <h2 class="font-bold text-4xl text-center mb-4">Drinks</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div class="flex justify-center items-center">
                        <img class="w-full max-w-md md:max-w-lg h-96 object-cover rounded-2xl" src={drinks} alt="" />
                    </div>
        
                    <div class="rounded-l-3xl p-6 mt-4">
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Caramel Macchiato" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h2 class="font-bold text-4xl text-center mb-4">Desserts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div class="pl-16 mt-4">
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                        <MenuItem name="Chocolate Mousse" price="45.000" desc="Lorem ipsum dolor sit, amet consectetur adipisicing." type={2} />
                    </div>

                    <div class="flex justify-center items-center pr-16">
                        <img class="w-full max-w-md md:max-w-lg h-full object-cover rounded-2xl" src={dessert} alt="" />
                    </div>
                </div>
                
            </div>
        </section>

        <Footer />
        </>
        
    )
}

export default Menu