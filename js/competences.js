const categories = [
    {
        id: 1,
        name: 'Language',
        color: '#e67e22',
    },
    {
        id: 2,
        name: 'Outil',
        color: '#e74c3c',
    },
    {
        id: 3,
        name: 'Logiciel',
        color: '#9b59b6',
    },
    {
        id: 4,
        name: 'OS',
        color: '#2ecc71',
    },
    {
        id: 5,
        name: 'Normes',
        color: '#3498db',
    },
    {
        id: 6,
        name: 'Frameworks',
        color: '#1abc9c',
    },
    {
        id: 10,
        name: 'Autres',
        color: '#f1c40f',
    },
];

const competences = [
    {
        id: 1,
        name: 'HTML',
        category: 1,
        numberOfProjects: 'des dizaines',
        since: '2020',
        ratingOutOfTen: 9,
    },
    {
        id: 2,
        name: 'CSS',
        category: 1,
        numberOfProjects: 'des dizaines',
        since: '2020',
        ratingOutOfTen: 6,
    },
    {
        id: 3,
        name: 'JavaScript',
        category: 1,
        numberOfProjects: 'des dizaines',
        since: '2022',
        ratingOutOfTen: 7,
    },
    {
        id: 4,
        name: 'PHP',
        category: 1,
        numberOfProjects: 'des dizaines',
        since: '2021',
        ratingOutOfTen: 8,
    },
    {
        id: 5,
        name: 'SQL',
        category: 1,
        numberOfProjects: 'des dizaines',
        since: '2021',
        ratingOutOfTen: 9,
    },
    {
        id: 6,
        name: 'Git',
        category: 2,
        numberOfProjects: 'beaucoup trop de',
        since: '2022',
        ratingOutOfTen: 6,
    },
    {
        id: 7,
        name: 'Linux',
        category: 4,
        numberOfProjects: '',
        since: '2022',
        ratingOutOfTen: 6,
    },
    {
        id: 8,
        name: 'Python',
        category: 1,
        numberOfProjects: '2',
        since: '2018',
        ratingOutOfTen: 3,
    },
    {
        id: 9,
        name: 'Bootstrap',
        category: 6,
        numberOfProjects: '2',
        since: '2023',
        ratingOutOfTen: 6,
    },
    {
        id: 10,
        name: 'UML',
        category: 5,
        numberOfProjects: '6',
        since: '2021',
        ratingOutOfTen: 8,
    },
    {
        id: 11,
        name: 'Davinci Resolve',
        category: 3,
        numberOfProjects: '',
        since: '2020',
        ratingOutOfTen: 5,
    },
    {
        id: 12,
        name: 'Tailwind CSS',
        category: 6,
        numberOfProjects: 'des dizaines',
        since: '2022',
        ratingOutOfTen: 7,
    },
    {
        id: 13,
        name: 'Quasar',
        category: 6,
        numberOfProjects: '7',
        since: '2022',
        ratingOutOfTen: 8,
    },
    {
        id: 14,
        name: 'Nuxt.js',
        category: 6,
        numberOfProjects: '5',
        since: '2022',
        ratingOutOfTen: 6,
    },
    {
        id: 15,
        name: 'Laravel',
        category: 6,
        numberOfProjects: '5',
        since: '2022',
        ratingOutOfTen: 4,
    },
    {
        id: 16,
        name: 'API REST',
        category: 5,
        numberOfProjects: 'des dizaines',
        since: '2022',
        ratingOutOfTen: 8,
    },
    {
        id: 17,
        name: 'WordPress Headless',
        category: 3,
        numberOfProjects: 'beaucoup trop de',
        since: '2022',
        ratingOutOfTen: 8,
    },
    {
        id: 18,
        name: 'WooCommerce',
        category: 10,
        numberOfProjects: '1',
        since: '2022',
        ratingOutOfTen: 3,
    },
    {
        id: 19,
        name: 'Vue.JS',
        category: 6,
        numberOfProjects: 'des dizaines',
        since: '2022',
        ratingOutOfTen: 7,
    },
    {
        id: 19,
        name: 'phpMyAdmin',
        category: 2,
        numberOfProjects: 'presque tous mes',
        since: '2021',
        ratingOutOfTen: 9,
    },
];

function diffDateNow(date) {
    const inputDate = new Date(date);
    const currentDate = new Date();

    const monthDifference = (currentDate.getMonth() - inputDate.getMonth()) +
        12 * (currentDate.getFullYear() - inputDate.getFullYear());

    if (monthDifference >= 1 && monthDifference < 12) {
        return `${monthDifference} mois`;
    } else if (monthDifference >= 12) {
        const years = Math.floor(monthDifference / 12);

        if (years === 1) {
            return `${years} an`;
        } else {
            return `${years} ans`;
        }
    } else {
        return "";
    }
}

function getCategoryById(categoryId) {
    return categories.find(category => category.id === categoryId);
}

function getCategories() {
    return categories;
}

function getCompetenceById(competenceId) {
    return competences.find(competence => competence.id === competenceId);
}

function getCompetences(orderBy = 'categoryName', order = 'asc') {
    const competencesWithCategories = competences.map(competence => {
        const category = getCategoryById(competence.category);
        return {
            ...competence,
            category: category,
            sinceSentence: diffDateNow(competence.since),
        };
    });

    competencesWithCategories.sort((a, b) => {
        if (order === 'asc') {
            if (orderBy === 'categoryName') {
                return a.category.name.localeCompare(b.category.name);
            } else {
                return a[orderBy] - b[orderBy];
            }
        } else if (order === 'desc') {
            if (orderBy === 'categoryName') {
                return b.category.name.localeCompare(a.category.name);
            } else {
                return b[orderBy] - a[orderBy];
            }
        }
    });

    return competencesWithCategories;
}

console.log(getCompetences());