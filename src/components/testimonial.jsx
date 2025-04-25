function Testimonial({image, name, rate, review}){
    return(
        <>
        <div class="bg-gray-300 p-4 rounded-2xl">
            <div class="flex items-center space-x-4">
                <img class="w-16 h-16 rounded-full border" src={image} alt="" />
                <div>
                    <p class="font-semibold">{name}</p>
                    <p>Rate: {rate}/5.0</p>
                </div>
            </div>
            <div class="mt-4">"{review}"</div>
        </div>
        </>
    )
}

export default Testimonial;