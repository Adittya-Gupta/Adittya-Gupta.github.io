burger=document.querySelector('.burger')
navlist=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('visibility')
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});