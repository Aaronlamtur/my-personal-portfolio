// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oncick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar .classList.toggle('active');
}

// scroll section 
let section = document.querySelectorAll('section');
let navlinks = document .querySelectorAll('header nav a')

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec .offsetHeight;
        let id = sec .getAttribute('id');

        if (top >= offset && top <offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').addEventListener('active');
            
            })

            sec.classList.add('show-animat')
        }
        else{
            sec.classList.remove('show-animate')
        }
    });
    // sticky header 
    let header = document.querySelector('header');


    header.classList.toggle('sticky', window.scrollY > 100);
}

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');