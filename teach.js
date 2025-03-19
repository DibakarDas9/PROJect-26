function showContent(contentId, imgId) {
    document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.image-container img').forEach(img => img.classList.remove('active'));
    
    document.getElementById(contentId).classList.add('active');
    document.getElementById(imgId).classList.add('active');
    event.target.classList.add('active');
}