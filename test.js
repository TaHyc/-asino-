document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
document.getElementById('nav').onmouseup = function(event) {
    let s = document.querySelector('.submenu')
    var target = event.target;
    if (target.className == 'menu-item') {
    closeMenu();
    s.textContext='RU';
    s.style.backgroundColor='red';
    s.style.display='block';
    }
}

document.onmouseup=function(event) {
    var target = event.target;
    console.log(event.target);
    if(target.className!='menu-item' && target.className!='submenu'){
    closeMenu()
    }}

function closeMenu() {
    let subm = document.querySelector('.submenu')
    subm.style.display="none";

}
    