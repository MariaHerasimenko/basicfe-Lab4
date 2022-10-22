const ex1ById = document.getElementById('ex1');
const ex1querySelector = document.querySelector('.ex1');

function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

function getRandomColorStyle() {
    return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}

const changeColorById = () => {
    ex1ById.style.background = getRandomColorStyle();
    ex1ById.style.color = getRandomColorStyle();
};

const changeColorByQS = () => {
    ex1querySelector.style.background = getRandomColorStyle();
    ex1querySelector.style.color = getRandomColorStyle();
};


const onClickAdd = () => {
    const extraImg = document.createElement('img');
    extraImg.id = 'picture';
    extraImg.src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/09/26/14/odessa-beach-night.jpg?quality=75&width=982&height=726&auto=webp';
    extraImg.style.width = '500px';
    extraImg.style.height = '350px';
    bodyElem.appendChild(extraImg);
};

const onClickIncrease = () => {
    const extraImg = document.getElementById('picture');
    extraImg.style.width = String(extraImg.offsetWidth + 25) +'px';
    extraImg.style.height = String(extraImg.offsetHeight + 25) +'px';
};

const onClickReduce = () => {
    const extraImg = document.getElementById('picture');
    extraImg.style.width = String(extraImg.offsetWidth - 25) +'px';
    extraImg.style.height = String(extraImg.offsetHeight - 25) + 'px';
};

const onClickRemove = () => {
    const extraImg = document.getElementById('picture');
    extraImg && bodyElem.removeChild(extraImg);
};

const bodyElem = document.querySelector('body');
const divButtons = document.createElement('div');
const addButton = document.createElement('button');
addButton.innerHTML = 'Add';
addButton.onclick = onClickAdd;
const increaseButton = document.createElement('button');
increaseButton.innerHTML = '+';
increaseButton.onclick = onClickIncrease;
const reduceButton = document.createElement('button');
reduceButton.innerHTML = '-';
reduceButton.onclick = onClickReduce;
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove';
removeButton.onclick = onClickRemove;
divButtons.appendChild(addButton);
divButtons.appendChild(increaseButton);
divButtons.appendChild(reduceButton);
divButtons.appendChild(removeButton);
bodyElem.appendChild(divButtons);