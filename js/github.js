const username = 'LalbaAnthony';

function formatRelativeDate(dateString) {
    const dateObject = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - dateObject;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const weeksDifference = Math.floor(daysDifference / 7);
    if (weeksDifference >= 2) {
        return `Il y a ${weeksDifference} semaines`;
    } else if (weeksDifference === 1) {
        return 'Il y a une semaine';
    } else if (daysDifference >= 2) {
        return `Il y a ${daysDifference} jours`;
    } else if (daysDifference === 1) {
        return 'Hier';
    } else if (hoursDifference >= 2) {
        return `Il y a ${hoursDifference} heures`;
    } else if (hoursDifference === 1) {
        return 'Il y a une heure';
    } else if (minutesDifference >= 2) {
        return `Il y a ${minutesDifference} minutes`;
    } else if (minutesDifference === 1) {
        return 'Il y a une minute';
    } else {
        return 'À l\'instant';
    }
}

async function getProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const projects = await response.json();

        const formattedProjects = projects.map(project => ({
            name: project.name,
            description: project.description,
            url: project.html_url,
            language: project.language,
            updated_at: project.updated_at,
            relative_updated_at: formatRelativeDate(project.updated_at),
            owner: project.owner.login,
        }));

        return formattedProjects;
    } catch (error) {
        console.error('Erreur :', error.message);
        return [];
    }
}

console.log(getProjects());