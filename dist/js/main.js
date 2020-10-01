const open_btn = document.querySelector(".open")
const close_btn = document.querySelector(".close")
const nav = document.querySelector(".navigation")

open_btn.addEventListener('click', ()=>{
        open_btn.classList.add('close-nav')
        close_btn.classList.add('open-nav')
        nav.classList.add('open-nav')
})
close_btn.addEventListener('click', ()=>{
        open_btn.classList.remove('close-nav')
        close_btn.classList.remove('open-nav')
        nav.classList.remove('open-nav')
})