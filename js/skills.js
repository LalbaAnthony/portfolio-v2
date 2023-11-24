const categories = [
    {
        id: 1,
        name: 'Language',
        color: '#3498db',
    },
    {
        id: 2,
        name: 'Outils',
        color: '#e67e22',
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
        color: '#e74c3c',
    },
];

const skills = [
    {
        id: 1,
        name: 'HTML',
        category: 1,
        numberOfProjects: 0,
        since: '2018-01-01',
        ratingOutOfTen: 9,
    },
    {
        id: 2,
        name: 'CSS',
        category: 1,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 6,
    },
    {
        id: 3,
        name: 'JavaScript',
        category: 1,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 7,
    },
    {
        id: 4,
        name: 'PHP',
        category: 1,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 8,
    },
    {
        id: 5,
        name: 'SQL',
        category: 1,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 9,
    },
    {
        id: 6,
        name: 'Git',
        category: 2,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 6,

    },
    {
        id: 9,
        name: 'Linux',
        category: 4,
        numberOfProjects: 0,
        since: '2021-01-01',
        ratingOutOfTen: 6,
    },
];

function getSkills() {
    return skills;
}

function getCategories() {
    return categories;
}

function getSkillById(skillId) {
    return skills.find(skill => skill.id === skillId);
}

function getCategoryById(categoryId) {
    return categories.find(category => category.id === categoryId);
}

function diffDateNow(date) {
    const inputDate = new Date(date);
    const currentDate = new Date();

    const monthDifference = (currentDate.getMonth() - inputDate.getMonth()) +
        12 * (currentDate.getFullYear() - inputDate.getFullYear());

    if (monthDifference === 1) {
        return "1 month";
    } else if (monthDifference > 1 && monthDifference < 12) {
        return `${monthDifference} months`;
    } else if (monthDifference >= 12) {
        const years = Math.floor(monthDifference / 12);

        if (years === 1) {
            return `${years} year`;
        } else {
            return `${years} years`;
        }
    } else {
        return "Future date";
    }
}

function getSkillsWithCategories() {
    const skillsWithCategories = skills.map(skill => {
        const category = getCategoryById(skill.category);
        return {
            ...skill,
            category: category.name,
            sinceSentence: diffDateNow(skill.since),
        };
    });
    return skillsWithCategories;
}

console.log(getSkillsWithCategories());