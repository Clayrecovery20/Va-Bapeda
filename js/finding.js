const dummyData = [
    { name: "Server Is End of Life", level: "critical", issue: 4 },
    { name: "BruteForce Attack", level: "critical", issue: 6 },
    { name: "Subresource Integrity (SRI) not Implamented", level: "critical", issue: 3 },
    { name: "Hosting Phising Site", level: "high", issue: 1 },
    { name: "Endpoint Footprint on suspicious Website", level: "high", issue: 1 },
    { name: "Content-Security-Policy High Severity Findings", level: "high", issue: 1 },
    { name: "Slow HTTP Denial of service attack", level: "high", issue: 3 },
    { name: "Ddos Attack", level: "high", issue: 4 },
    { name: "Asset flagged as Malware", level: "medium", issue: 1 },
    { name: "Development configuration File", level: "medium", issue: 1 }
];

let isLevelAscending = true;
let isIssueAscending = true;

function renderData(data) {
    const menuContent = document.querySelector('.data-report');
    menuContent.innerHTML = ''; 
    data.forEach(item => {
        const rowData = document.createElement('div');
        rowData.classList.add('row-data');
        
        rowData.innerHTML = `
            <p class="name-data"><strong>${item.name}</strong></p>
            <p class="level-data ${item.level}-text"><strong>${item.level}</strong></p>
            <p class="issue-data "><strong>${item.issue}</strong></p>
        `;
        
        menuContent.appendChild(rowData);
    });
}

function sortByLevel() {
    const sortedData = [...dummyData].sort((a, b) => {
        const levelOrder = { "critical": 3, "high": 2, "medium": 1 };
        
        return isLevelAscending 
            ? levelOrder[b.level] - levelOrder[a.level]
            : levelOrder[a.level] - levelOrder[b.level];
    });
    
    isLevelAscending = !isLevelAscending;
    
    renderData(sortedData);
}
function sortByIssue() {
    const sortedData = [...dummyData].sort((a, b) => {
        return isIssueAscending ? a.issue - b.issue : b.issue - a.issue;
    });
    
    isIssueAscending = !isIssueAscending;
    
    renderData(sortedData);
}

document.getElementsByClassName('level-btn')[0].addEventListener('click', () => {
    sortByLevel();
});

document.getElementsByClassName('issue-btn')[0].addEventListener('click', () => {
    sortByIssue();
});

renderData(dummyData);
