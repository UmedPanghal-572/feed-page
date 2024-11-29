
const switchBtn = document.getElementById('switchBtn');

switchBtn.addEventListener('click', function () {
    switchBtn.classList.toggle('active');
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode'); 1
    }
});



const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
        searchInput.value = '';
    }
});



const searchBarBtn = document.getElementById('searchBarBtn');

searchBarBtn.addEventListener('click', function () {
    searchBarBtn.classList.toggle('active');
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode'); 1
    }
});