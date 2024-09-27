// Mobile menu toggle
document.getElementById("menuToggle").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
});

document.getElementById("menuClose").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = "none";
});

// Project cards generation
document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { id: 1, name: "Project 1", description: "Description of project 1. This is a brief overview of what the project does and the technologies used." },
        { id: 2, name: "Project 2", description: "Description of project 2. This is a brief overview of what the project does and the technologies used." },
        { id: 3, name: "Project 3", description: "Description of project 3. This is a brief overview of what the project does and the technologies used." },
    ];

    const projectsContainer = document.getElementById("projectsContainer");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "bg-white overflow-hidden shadow rounded-lg";
        projectCard.innerHTML = `
            <div class="p-5">
                <h3 class="text-lg font-medium text-gray-900">${project.name}</h3>
                <p class="mt-1 text-sm text-gray-600">${project.description}</p>
            </div>
            <div class="bg-gray-50 px-5 py-3">
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">View Project</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});
