const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("nav-ul")
const navListItems = document.querySelectorAll("#nav-ul li")

hamburger.addEventListener("click", toggle)
navListItems.forEach(li => {
     li.addEventListener("click", toggle)
});

function toggle() {
    navList.classList.toggle("show-menu")
}

