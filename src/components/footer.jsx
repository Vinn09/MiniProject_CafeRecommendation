import { useState } from 'react'

function Footer() {
    return (
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
    )
}

export default Footer