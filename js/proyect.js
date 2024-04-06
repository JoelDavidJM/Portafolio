const btnLeft = document.querySelector(".btn__left1"),
      btnRigth = document.querySelector(".btn__rigth1"),
      slider = document.querySelector('#slider')
      sliderSelection = document.querySelectorAll(".slider__section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRigth.addEventListener("click", e => moveToRigth())

setInterval(() => {
    moveToRigth()
}, 5000)

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSelection.length;

function moveToRigth() {
    if(counter >= sliderSelection.length - 1) {
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'none'
        return
    } 
        counter++
        operacion = operacion + widthImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'all ease .6s'
    
}

function moveToLeft() {
    counter--
    if(counter < 0) {
        counter = sliderSelection.length - 1
        operacion = widthImg * (sliderSelection.length - 1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = 'none'
        return
    } 
        operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .6s'
    
}