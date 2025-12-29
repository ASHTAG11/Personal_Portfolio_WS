//show menu
const showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}

showmenu('toggle', 'menu')

//active & remove active

const navlink = document.querySelectorAll('.nav_link')
 navlink.forEach(n => n.classList.remove('active'))

function linkAction() {

    navlink.forEach(n => n.classList.remove('active'))  
    this.classList.add('active')

    const nav = document.getElementById('menu')
    nav.classList.remove('show')
}


navlink.forEach(n => n.addEventListener('click', linkAction))