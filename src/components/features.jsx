function Features ({image, feature, desc }) {
    return (
        <>
        <div class="flex flex-col items-center">
            <img class="w-30 h-30 mb-8 opacity-50" src={image} alt="" />
            <h3 class="font-semibold text-2xl">{feature}</h3>
            <p class="text-center">{desc}</p>
        </div>
        </>
    )
}

export default Features;