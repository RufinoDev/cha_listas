const card = [...document.querySelectorAll('.card')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

card.forEach((item, i) => {
    let cardDimensions = item.getBoundingClientRect();
    let cardWidth = cardDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += cardWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= cardWidth;
    })
})