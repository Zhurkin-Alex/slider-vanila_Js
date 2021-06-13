function activeClass(activeItem=0){
  const slides = document.querySelectorAll('.slide')
  const boxSlide = document.querySelector('.box-slide')
  
  slides[activeItem].classList.add('active')
  
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
}

activeClass(0)
