const button = document.querySelector("#button");
const quote = document.querySelector("#quote");
const image = document.querySelector("#image");

const begining = [
    'Кто рано встает, ',
    'Не бойся ошибаться, ',
    'Когда меня рожали, ',
    'Каждый может кинуть камень в волка, ',
    'Нельзя стоять, когда другие работают, ',
    'Иногда, жизнь — это жизнь, ',
]

const ending = [
    'тот потом пожалеет о своем решении.',
    'собственно, тогда я и родился.',
    'но не каждый может кинуть волка в камень.',
    'надо лежать.',
    'а ты в ней — иногда.',
    'бойся не ошибаться.',
]

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]

function generateQuote() {
    let randomBegining = getRandomElement(begining);
    let randomEnding = getRandomElement(ending);

    let randomImg = getRandomElement(images);
    
    hide();

    let randomQuote = randomBegining + randomEnding;
    quote.innerText = randomQuote;
    


    function getRandomElement(array) {
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }

    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
        
        setTimeout(show, 500);
    }

    function show() {
        // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе - стандартные стили
        if (randomQuote.length <= 48) {
            quote.style.fontSize = '42px';
            quote.style.justifyContent = 'center';
        } else {
            quote.style.fontSize = '';
            quote.style.justifyContent = '';
        }

        image.src = 'images/' + randomImg;
        // Тут нужно добавить изменение текстового содержимого объекта quote

        image.classList.add('show');
        quote.classList.add('show');
    }
}
button.addEventListener("click", generateQuote);

