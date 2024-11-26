
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




function initializeSlider() {
    if ($(window).width() < 992) {
        $('.sliders').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
        });
    } else {
        if ($('.sliders').hasClass('slick-initialized')) {
            $('.sliders').slick('unslick');
        }
    }
}

$(document).ready(function () {
    initializeSlider();
});

$(window).resize(function () {
    initializeSlider();
});