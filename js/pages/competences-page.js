function clearCompetencesList() {
    const competencesList = document.getElementById('competences-list');
    competencesList.innerHTML = '';
}
async function fillCompetencesList() {
    const competencesList = document.getElementById('competences-list');

    // Clear the competences list
    if (competencesList.innerHTML) {
        clearCompetencesList();
    }

    // Get competences & fill the list
    const competences = await getCompetences();

    competences.forEach(competence => {
        // Create list item
        const listItem = document.createElement('li');
        listItem.classList.add('competence');

        // Create competence title
        const title = document.createElement('h3');
        title.classList.add('competence-title');
        title.textContent = competence.name;

        // Create language pill
        const languagePill = document.createElement('div');
        languagePill.classList.add('pill');
        languagePill.style.backgroundColor = competence.category.color ? competence.category.color : '--primary';
        languagePill.textContent = competence.category.name;

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
        fulfilledRange.classList.add(`percentage-${competence.ratingOutOfTen * 10}`);
        rangeContainer.appendChild(fulfilledRange);

        // Create numbers sentence span
        const numberSentence = document.createElement('span');
        numberSentence.classList.add('numbers-sentence');
        // TODO: Need to improve this shit because this shit is shit
        let sentence = '';
        if (diffDateNow(competence.since)) sentence = `Depuis ${diffDateNow(competence.since)}`;
        if (competence.numberOfProjects && competence.category.id === 1) {
            if (diffDateNow(competence.since)) sentence = sentence + `, dans ${competence.numberOfProjects} projets`;
            else sentence = `Dans ${competence.numberOfProjects} projets`;
        }
        numberSentence.textContent = sentence;

        // Create sr-only span for screen readers
        const srOnly = document.createElement('span');
        srOnly.classList.add('sr-only');
        srOnly.textContent = `Je maitrise le "${competence.name}" sur une note de ${competence.ratingOutOfTen} sur 10`;

        // Append elements to the list item
        listItem.appendChild(titleBlock);
        listItem.appendChild(rangeContainer);
        listItem.appendChild(numberSentence);
        listItem.appendChild(srOnly);

        // Append the list item to the competences list
        competencesList.appendChild(listItem);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    fillCompetencesList();
});