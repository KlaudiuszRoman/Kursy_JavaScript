$input = document.querySelector('input');
$ball = document.querySelector('.ball-img');

$answer = document.querySelector('.answer');
$error = document.querySelector('.error');
$answers = ['Tak!', 'Nie!', 'Nie chcesz wiedzieć!', 'Nie dali mi!'];

const ballPressed = function () {
    $ball.firstElementChild.classList.add('shake-animation');
    $answer.innerText = '';
    checkInput();

};

const stopShakeBall = () => {
    $ball.firstElementChild.classList.remove('shake-animation');
};

const checkInput = () => {
    if ($input.value === '') {
        $error.innerText = 'Zadaj pytanie!';
        stopShakeBall();
    } else if ($input.value.charAt($input.value.length - 1) !== '?') {
        $error.innerText = 'Pytanie musi kończyć się pytajnikiem!';
        stopShakeBall();
    } else {
        setTimeout(stopShakeBall, 1000);
        showAnswer();
    };

};

const showAnswer = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    $answer.innerHTML = `<span>Odpowiedź:</span> ${$answers[getRandomInt(0, $answers.length)]}`;
    $error.innerText = '';
};

$ball.addEventListener('click', ballPressed);