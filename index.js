const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("nav-ul")
const navListItems = document.querySelectorAll("#nav-ul li")
const frontendProjectsDiv = document.getElementById("frontend-projects");
const fullstackProjectsDiv = document.getElementById("fullstack-projects");
const backendProjectsDiv = document.getElementById("backend-projects");

const frontendProjects = [
    {
        title: "ক্যালকুলেটর",
        img: "./images/projects_icons/calculator_icon.png",
        description: "ভ্যানিলা জাভাস্ক্রিপ্ট, এইচটিএমএল, সিএসএস দিয়ে তৈরি বেসিক ক্যালকুলেটর।",
        link: "https://calculator.asiradnan.com",
        category: "vanilla-js"
    },
    {
        title: "টিক ট্যাক টো",
        img: "./images/projects_icons/tictactoe_icon.png",
        description: "এইচটিএমএল, সিএসএস এবং জাভাস্ক্রিপ্ট ব্যবহার করে তৈরি ক্লাসিক টিক-ট্যাক-টো গেম।",
        link: "https://tictactoe.asiradnan.com",
        category: "vanilla-js"
    },
    {
        title: "কুইজ",
        img: "./images/projects_icons/quiz_icon.png",
        description: "এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্ট দিয়ে বানানো কুইজ অ্যাপ।",
        link: "https://quiz.asiradnan.com",
        category: "vanilla-js"
    },
    {
        title: "ছোট্ট ইউআরএল",
        img: "./images/projects_icons/chottourl_icon.png",
        description: "যেকোনো বড় URL-কে মুহূর্তেই করুন ছোট ও শেয়ারেবল।",
        link: "https://chottourl.asiradnan.com",
        category: "react-js"
    },
]

const fullstackProjects = [
    {
        title: "কিউ আর কোড",
        img: "./images/projects_icons/qr_icon.jpg",
        description: "যেকোনো টেক্সট বা লিংক দিয়ে কাস্টম কিউআর (QR) কোড তৈরি করুন!",
        link: "https://qr.asiradnan.com",
        category: "django"
    }
]

const backendProjects = [
    {
        title: "ছোট্ট ইউআরএল",
        img: "./images/projects_icons/api_icon.png",
        description: "ছোট্ট ইউআরএল প্রজেক্টের রেস্ট এপিআই (REST API) ব্যাকএন্ড সার্ভিস।",
        link: "https://u.asiradnan.com",
        category: "drf"
    }
]

hamburger.addEventListener("click", toggle)
navListItems.forEach(li => {
    li.addEventListener("click", toggle)
});

function toggle() {
    navList.classList.toggle("show-menu")
}

function makeIndividualProjectDiv(project) {
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

    individualProjectDiv.addEventListener("click", () =>
        window.open(project.link), '_blank'
    )
    return individualProjectDiv
}

fullstackProjects.forEach((project) => {
    fullstackProjectsDiv.appendChild(makeIndividualProjectDiv(project))
})

frontendProjects.forEach((project) => {
    frontendProjectsDiv.appendChild(makeIndividualProjectDiv(project))
})


backendProjects.forEach((project) => {
    backendProjectsDiv.appendChild(makeIndividualProjectDiv(project))
})