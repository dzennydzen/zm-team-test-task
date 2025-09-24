const rotatePart = document.getElementById('wheel-inner');
const sectors = document.querySelectorAll('.sector');
const btn = document.getElementById('rotate-btn');
const modal = document.querySelector('.modal');

let finalAngle = 0; //переменная под конечный угол после всех оборотов
let rotationsAmount = 7; //кол-во полных оборотов
let fullAngle = 360;
let angleFromInitPoint = 90; //расстояние от изначального положения колеса

//расчет сектора-победителя
function calcWinSectorVal() {
    const sectorsFromInitPoint = angleFromInitPoint / 45;
    const winnedIndex = (sectors.length - sectorsFromInitPoint) % sectors.length;

    return sectors[winnedIndex].dataset.value;
}

//показ модалки
function showModal(winVal) {
    const span = document.getElementById('reward-value');
    span.textContent = winVal;
    modal.classList.add('active');
}

//обработчик завершения анимации кручения колеса
function handleRotationEnding() {
    showModal(calcWinSectorVal());
}

btn.addEventListener('click', (e) => {
    finalAngle = fullAngle * rotationsAmount + angleFromInitPoint; //полные обороты * количество оборотов + нужный угол для сектора 300
    rotatePart.style.transform = `translate(-50%, -50%) rotate(${finalAngle}deg)`;
    e.target.style.pointerEvents = 'none';
    e.target.disabled = true;
});

rotatePart.addEventListener('transitionend', handleRotationEnding);