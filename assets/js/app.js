const btn  = document.querySelectorAll('.nav__option')
const contentApp = document.querySelectorAll('.app-content')


btn.forEach((btn,index) => {
    btn.onclick = function(e) {
        document.querySelector('.app-content.active').classList.remove('active');
        document.querySelector('.nav__option.active').classList.remove('active');
       
        contentApp[index].classList.add('active')
        this.closest('.nav__option').classList.add('active');
    }
})