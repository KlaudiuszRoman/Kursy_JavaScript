$price = document.querySelector('#price');

$people = document.querySelector('#people');

$tip = document.querySelector('#tip');

$error = document.querySelector('.error');

$cost = document.querySelector('.cost');

$countBtn = document.querySelector('.count');

$costInfo = document.querySelector('.cost-info');

function checkComplete() {
    if ($price.value.length > 0 && $people.value.length > 0) {
        calc();
    } else {
        $error.textContent = 'Uzupełnij wymagagne pola!';
        $costInfo.style.display = 'none';
    }
};

function calc() {

    $cost.textContent =
        Math.round((
            (Number($price.value) +
                (Number($price.value) * Number($tip.value))) /
            Number($people.value) * 100)) / 100;
    $costInfo.style.display = 'inherit';
    $error.textContent = '';
};

$countBtn.addEventListener('click', checkComplete);