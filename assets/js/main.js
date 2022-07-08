// IMask.js
const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
  mask: '+{996} 000 000 000',
};
elementsPhone.forEach(element => {
    IMask(element, maskOptions);
});


//Choices.js
const choices = new Choices('.select', {
    searchEnabled: false,
}); 


// Flatpickr.js
flatpickr("#date", {
    dateFormat: 'm/d',
});

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
});


// Swiper.js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});


// Tab
const onTabClick = function(idContainer, idElement) {
    let dataAttribute = `[data-${idContainer}`;
    for(let item of document.querySelectorAll(`${dataAttribute}-name`)) {
        item.classList.remove('active');
    }
    for(let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
        item.classList.remove('active');
    }
    document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');
    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');
}

let tabsName = document.querySelectorAll('.tab-name');
tabsName.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        onTabClick(event.target.parentElement.id, event.target.dataset.menuTabsName);
    });
});


// GLightBox.js
const lightbox = GLightbox({
    selector: '.gallery-image',
    touchNavigation: true,
    loop: true,
});