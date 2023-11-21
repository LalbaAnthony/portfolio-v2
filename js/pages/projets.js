
window.addEventListener('DOMContentLoaded', function () {
    const fitlerBtn = document.getElementById("filter-button");
    fitlerBtn.addEventListener("click", toggleFilters);
});

function toggleFilters() {
    const filterDropdown = document.getElementById("filter-dropdown");
    if (filterDropdown.classList.contains("open")) {
        filterDropdown.classList.remove("open");
    }
    else {
        filterDropdown.classList.add("open");
        setTimeout(() => { closeFilters() }, "5000");
    }
}

function openFilters() {
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.classList.add("open");
    setTimeout(() => { closeFilters() }, "5000");
}

function closeFilters() {
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.classList.remove("open");
}