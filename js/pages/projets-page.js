function isFilterOpen() {
    const filterDropdown = document.getElementById("filter-dropdown");
    const isOpen = filterDropdown.classList.contains("open");
    return isOpen;
}

function closeIfOutside(event) {
    const filterDropdown = document.getElementById("filter-dropdown");
    const filterButton = document.getElementById("filter-button");
    if (!filterDropdown.contains(event.target) && !filterButton.contains(event.target)) {
        closeFilters();
    }
}

function openFilters() {
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.classList.add("open");
    document.addEventListener("click", closeIfOutside);
}

function closeFilters() {
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.classList.remove("open");
    document.removeEventListener("click", closeIfOutside);
}

function toggleFilters() {
    if (!isFilterOpen()) {
        openFilters();
        setTimeout(() => { closeFilters() }, "10000");
    }
    else {
        closeFilters();
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const fitlerBtn = document.getElementById("filter-button");
    fitlerBtn.addEventListener("click", toggleFilters);
});

function clearProjectList() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
}

function hideLoader() {
    const loader = document.getElementById('loader-container');
    loader.classList.add('hidden');
}

async function fillProjectsList(orderby = 'date', order = 'desc') {
    const projectsList = document.getElementById('projects-list');

    // Clear the projects list
    if (projectsList.innerHTML) {
        clearProjectList();
    }

    // Get projects & fill the list
    const projects = await getProjects(orderby, order);

    // Hide loader
    hideLoader();

    projects.forEach(project => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.classList.add('project');

        // Create project title
        const title = document.createElement('h3');
        title.classList.add('project-title');
        title.textContent = project.name;

        // Create language pill inside a span
        const languageContainer = document.createElement('span');
        const languagePill = document.createElement('div');
        languagePill.classList.add('pill');
        languagePill.style.backgroundColor = project.language_color;
        languagePill.textContent = project.language;
        languageContainer.appendChild(languagePill);
        
        // Create project infos container
        const infosContainer = document.createElement('div');
        infosContainer.classList.add('project-infos');
        
        // Create relative update time span
        const updateSpan = document.createElement('span');
        updateSpan.classList.add('update-date');
        updateSpan.textContent = project.pushed_at_relative;
        
        // Create sr-only span for screen readers
        const srOnly = document.createElement('span');
        srOnly.classList.add('sr-only');
        srOnly.textContent = `Projet "${project.name}", realisé en ${project.language} et mis à jour ${project.pushed_at_relative}`;

        // Append elements to the list item
        infosContainer.appendChild(languageContainer);
        infosContainer.appendChild(updateSpan);
        
        listItem.appendChild(title);
        listItem.appendChild(infosContainer);
        listItem.appendChild(srOnly);

        // Append elements to the list item
        listItem.addEventListener("click", function () {
            window.open(project.url);
        });

        // Append the list item to the projects list
        projectsList.appendChild(listItem);
    });

    // Close filters if open
    if (isFilterOpen()) {
        closeFilters();
    }
}

window.addEventListener('DOMContentLoaded', function () {
    fillProjectsList('date', 'asc');
});