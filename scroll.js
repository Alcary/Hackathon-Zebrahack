window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var textElement = document.getElementById('scroll-text');

    if (scrollPosition > 0) {
        textElement.style.display = 'block';
        setTimeout(function() {
            textElement.style.opacity = '1';
        }, 50);
    } else {
        textElement.style.opacity = '0';
        setTimeout(function() {
            if (window.scrollY === 0) {
                textElement.style.display = 'none';
            }
        }, 500);
    }
});