// Создание модального окна

let contactButton = document.querySelector('.our-contacts__popup')
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.popup__close')


contactButton.addEventListener('click', function() {
    popup.classList.remove('popup-hidden')
})


popupClose.addEventListener('click', function() {
    popup.classList.add('popup-hidden')
})


window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        popup.classList.add('popup-hidden')
    }
})






// Создание бургер меню  (стилизация)  (шаг №1)

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});







// Создание табов

const tabButton = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.tab-content')


tabButton.forEach(button => button.addEventListener('click', function() {
    for (let tabBtnElement of tabButton) {
        tabBtnElement.classList.remove('active-tab')
    }

    button.classList.add('active-tab')



    for (let content of tabContent) {
        content.classList.add('hidden')
    }

    let findTheId = document.querySelector('#' + button.dataset.tab)
    findTheId.classList.remove('hidden')
}))

let tab1 = document.querySelector('[data-tab="tab-2"]')
tab1.classList.add('active-tab')

let certainContent1 = document.querySelector('#tab-2')
certainContent1.classList.remove('hidden')