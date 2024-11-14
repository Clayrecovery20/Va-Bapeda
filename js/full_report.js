const dummyData = [
    
    { name: "VA BAPPEDA JATENG", level: "bad", date: "25/10/2024" , "link" : "https://drive.google.com/drive/folders/1n3GEVQRbMyEzwaKzNNx6b6vxY9rLpoEa?usp=sharing"},
    { name: "VA BAPPEDA JATENG", level: "medium", date: "00/0/2024" , "link" : "https://drive.google.com/drive/folders/1n3GEVQRbMyEzwaKzNNx6b6vxY9rLpoEa?usp=sharing"}
];

let isLevelAscending = true;
let isDateAscending = true;

function renderData(data) {
    const menuContent = document.querySelector('.data-report');
    menuContent.innerHTML = '';
    data.forEach(item => {
        const rowData = document.createElement('div');
        rowData.classList.add('row-data');
        
        rowData.innerHTML = `
            <a class="name-data" href="${item.link}"><strong>${item.name}</strong></a>
            <p class="level-data ${item.level}-text"><strong>${item.level}</strong></p>
            <p class="date-data"><strong>${item.date}</strong></p>
        `;
        
        menuContent.appendChild(rowData);
    });
}

function sortByLevel() {
    const sortedData = [...dummyData].sort((a, b) => {
        if (a.level === "bad" && b.level === "medium") return isLevelAscending ? -1 : 1;
        if (a.level === "medium" && b.level === "bad") return isLevelAscending ? 1 : -1;
        return 0;
    });
    
    isLevelAscending = !isLevelAscending;
    
    renderData(sortedData); 
}

function sortByDate() {
    const sortedData = [...dummyData].sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        return isDateAscending ? dateA - dateB : dateB - dateA;
    });
    
    isDateAscending = !isDateAscending;
    
    renderData(sortedData); 
}

document.getElementsByClassName('level-btn')[0].addEventListener('click', () => {
    sortByLevel();
    
});

document.getElementsByClassName('date-btn')[0].addEventListener('click', () => {
    sortByDate();
});

renderData(dummyData);
