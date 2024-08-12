/*
На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).*/

const enterBtn = document.querySelector('.enter-btn');
const followBtn = document.querySelector('.follow-btn');

let input;
followBtn.disabled = true;

enterBtn.addEventListener('click', () => {
    
    input = prompt('Enter a link');
    followBtn.disabled = true;

    if(input === null) {
        alert('You canceled!')
        followBtn.disabled = true;
    } else if (!input.trim()) {
        alert('Enter entered nothing!')
        followBtn.disabled = true;
    } else if (!input.startsWith('http://') && !input.startsWith('https://')) {
        alert('Please enter a valid link starting with http:// or https://');
        followBtn.disabled = true;
    } else {
        console.log(input);
        followBtn.disabled = false;
    }
});

followBtn.addEventListener('click', () => {
     window.location.href = input;     
});

//ЗАДЕПЛОЇТИ