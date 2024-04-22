// REMOVE BR FROM H1
const breaker = document.querySelector('.breaker');

window.addEventListener('resize', () =>{
    const windowWidth = window.screen.innerWidth;
    if (windowWidth < 720) {
        console.log('Mobile screen visible')
        breaker.style.display = 'block';
    } else {
        console.log('Tablet and larger visible')
        breaker.style.display = 'none';
    }
})