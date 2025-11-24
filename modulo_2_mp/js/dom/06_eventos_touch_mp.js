const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'yellow';
    areaTouch.textContent = "👆 Tocaste el área de jeans";
});
