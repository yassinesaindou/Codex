const toggleBtn = document.querySelector('.toggle');
const list = document.querySelector('.nav__list');
toggleBtn.addEventListener('click', () =>{
    list.classList.toggle('show');
    console.log(list);
})