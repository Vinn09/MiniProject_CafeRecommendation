import { useState } from 'react'

function MenuItem ({image, name, price, desc, type}) {
    if(type === 1) {
        return (
            <>
            <div class="flex">
                <img class="h-24 w-32 rounded-md" src={image} alt={name} />
                <div class="ml-4">
                    <div class="flex space-x-52">
                        <p class="font-bold">{name}</p>
                        <p>Rp {price}</p>
                    </div>
                    <div class="border-t">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            </>
        )
    } else if(type === 2) {
        return (
            <>
            <div class="flex mb-4">
                <div class="ml-4">
                    <div class="flex space-x-52">
                        <p class="font-bold">{name}</p>
                        <p>Rp {price}</p>
                    </div>
                    <div class="border-t">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MenuItem;