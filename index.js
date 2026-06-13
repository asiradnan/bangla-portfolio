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

const frontendProjects = [
    {
        title: "ক্যালকুলেটর",
        img: "./images/projects_icons/calculator_icon.png",
        description: "ভ্যানিলা জাভাস্ক্রিপ্ট, এইচটিএমএল, সিএসএস দিয়ে তৈরি বেসিক ক্যালকুলেটর।",
        link: "https://calculator.asiradnan.com"
    },
    {
        title: "টিক ট্যাক টো",
        img: "./images/projects_icons/tictactoe_icon.png",
        description: "এইচটিএমএল, সিএসএস এবং জাভাস্ক্রিপ্ট ব্যবহার করে তৈরি ক্লাসিক টিক-ট্যাক-টো গেম।",
        link: "https://tictactoe.asiradnan.com"
    },
]
const projectsDiv = document.getElementById("frontend-projects");

frontendProjects.forEach((project) => {
    const anchor = document.createElement("a");
    anchor.href = project.link;
    anchor.target = "_blank"

    const individualProjectDiv = document.createElement("div")
    individualProjectDiv.classList.add("project")

    const image = document.createElement("img")
    image.classList.add("project-grid-item")
    image.src = project.img

    const header = document.createElement("h3")
    header.classList.add("project-grid-item")
    header.innerHTML = project.title

    const para = document.createElement("p")
    para.classList.add("project-grid-item")
    para.innerHTML = project.description

    individualProjectDiv.appendChild(image)
    individualProjectDiv.appendChild(header)
    individualProjectDiv.appendChild(para)

    anchor.appendChild(individualProjectDiv)

    projectsDiv.appendChild(anchor)

})
