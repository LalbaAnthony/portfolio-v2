const username = 'LalbaAnthony';

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
        }));

        return formattedProjects;
    } catch (error) {
        console.error('Erreur :', error.message);
        return [];
    }
}

getProjects();
