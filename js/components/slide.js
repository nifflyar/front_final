let splide
document.addEventListener("DOMContentLoaded", function() {
    splide = new Splide("#carousel", {
        type: "slide",
        arrows: false,
        autoplay: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoWidth: false,
        drag: false,
        speed: 3000,
        gap: '100px',
    }).mount()
})

document.getElementById('btn-back').addEventListener('click', function(){
    splide.go('<')
})
document.getElementById('btn-next').addEventListener('click', function(){
    splide.go('>')
})