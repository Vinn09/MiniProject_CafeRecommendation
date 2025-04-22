import { useState } from 'react'
import dessert from "../assets/dessert.jpg";
import drinks from "../assets/drinks.png"
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="h-24 w-32 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f8BPYqYfPnL9yHqZUDaEaIG1PUQk1mIOLA&s" alt="" />
                        <div class="ml-4">
                            <div class="flex space-x-52">
                                <p class="font-bold">French Toast</p>
                                <p>Rp 45.000</p>
                            </div>
                            <div class="border-t">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto quia explicabo quo ratione. Eveniet!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12">
                <h2 class="font-bold text-4xl text-center mb-4">Drinks</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div class="flex justify-center items-center">
                        <img class="w-full max-w-md md:max-w-lg h-96 object-cover rounded-2xl" src={drinks} alt="" />
                    </div>
        
                    <div class="rounded-l-3xl p-6 mt-4">
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Caramel Macchiato</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h2 class="font-bold text-4xl text-center mb-4">Desserts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div class="pl-16 mt-4">
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="ml-4">
                                <div class="flex space-x-52">
                                    <p class="font-bold">Chocolate Mousse</p>
                                    <p>Rp 45.000</p>
                                </div>
                                <div class="border-t">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
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