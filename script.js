const slides = document.querySelectorAll('.slide')
const boxSlide = document.querySelector('.box-slide')

console.log('slide');

slides.forEach(el=>{
  el.addEventListener('click', ()=>{
    clearActiveClass()
    el.classList.add('active')
  })
})

function clearActiveClass(){
  boxSlide.classList.add('width__container')
  slides.forEach(el=>{
    el.classList.remove('active')
  })
}
