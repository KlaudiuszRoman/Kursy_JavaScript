$drinkList = document.querySelector(".drink-list");

$ul = $drinkList.querySelector("ul");

$input = document.querySelector('.search');

function search(e) {
    console.log(e);
    console.log($input.value);
    $ul.childNodes.forEach(element => {
        console.log(element);
        if (element.nodeName === 'LI')
            if (element.innerText.toLowerCase().includes($input.value.toLowerCase())) {
                element.hidden = false;
            } else {
                element.hidden = true;
            };
    });

};

$input.addEventListener('keyup', e => search(e));