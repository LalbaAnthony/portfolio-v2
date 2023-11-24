function clearSkillsList() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
}
async function fillSkillsList() {
    const skillsList = document.getElementById('skills-list');

    // Clear the skills list
    if (skillsList.innerHTML) {
        clearSkillsList();
    }

    // Get skills & fill the list
    const skills = await getSkills();

    skills.forEach(skill => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.classList.add('skill');

        // Create skill title
        const title = document.createElement('h3');
        title.classList.add('skill-title');
        title.textContent = skill.name;

        // Create language pill
        const languagePill = document.createElement('div');
        languagePill.classList.add('pill');
        languagePill.style.backgroundColor = skill.category.color ? skill.category.color : '--primary';
        languagePill.textContent = skill.category.name;

        // Create title block
        const titleBlock = document.createElement('div');
        titleBlock.classList.add('title-block');
        titleBlock.appendChild(title);
        titleBlock.appendChild(languagePill);

        // Create range container
        const rangeContainer = document.createElement('div');
        rangeContainer.classList.add('empty-range');
        const fulfilledRange = document.createElement('div');
        fulfilledRange.classList.add('fulfilled-range');
        fulfilledRange.classList.add(`percentage-${skill.ratingOutOfTen * 10}`);
        rangeContainer.appendChild(fulfilledRange);

        // Create numbers sentence span
        const numberSentence = document.createElement('span');
        numberSentence.classList.add('numbers-sentence');
        // TODO: Need to improve this shit because this is shit
        let sentence = '';
        if (skill.numberOfProjects && skill.category.id === 1) sentence = `Dans ${skill.numberOfProjects} projets`;
        if (diffDateNow(skill.since)) {
            if (skill.numberOfProjects && skill.category.id === 1) sentence = sentence + `, depuis ${diffDateNow(skill.since)}`;
            else sentence = `Depuis ${diffDateNow(skill.since)}`;
        }
        numberSentence.textContent = sentence;

        // Create sr-only span for screen readers
        const srOnly = document.createElement('span');
        srOnly.classList.add('sr-only');
        srOnly.textContent = `Je maitrise le "${skill.name}" sur une note de ${skill.ratingOutOfTen} sur 10`;

        // Append elements to the list item
        listItem.appendChild(titleBlock);
        listItem.appendChild(rangeContainer);
        listItem.appendChild(numberSentence);
        listItem.appendChild(srOnly);

        // Append the list item to the skills list
        skillsList.appendChild(listItem);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    fillSkillsList();
});