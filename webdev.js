function switchTab(event, tabId) {
    document.querySelectorAll('.pagevid > div:first-child div').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function toggleAnswer(event) {
    let answer = event.target.nextElementSibling;
    let isVisible = answer.style.display === "block";

    document.querySelectorAll('.answer').forEach(ans => ans.style.display = "none");

    if (!isVisible) {
        answer.style.display = "block";
    }
}
