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