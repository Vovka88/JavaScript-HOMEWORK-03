import foodData from './dataFood.js';


const cardsEl = document.createElement('div');
cardsEl.classList.add("container");

for (const iterator of foodData) {
    const { name, description, image, price} = iterator;
    const refs = {
        containerEl: document.createElement('div'),
        imgEl: document.createElement('img'),
        nameEl: document.createElement('h5'),
        descriptionEl: document.createElement('p'),
        btn: {
            containerEl: document.createElement('div'),
            settings: {
                containerEl: document.createElement('div'),
                imgEl: document.createElement('img'),
            },
            price: {
                containerEl: document.createElement('div'),
                contEl: document.createElement('div'),
                imgEl: document.createElement('img'),
                priceEl: document.createElement('a'),
            },
        },
    }
    { // Основа картки
        refs.imgEl.src = "./img/test.png";
        refs.nameEl.textContent = name;
        refs.descriptionEl.textContent = description;
    }

    { // Кнопка Налаштувань
        refs.btn.settings.imgEl.src = "./img/1x/edit-icon-2.png";
    }

    { // Кнопка Додавання в корзину
        refs.btn.price.imgEl.src = "./img/1x/bag-icon-2.png";
        refs.btn.price.priceEl.textContent = `${price.toFixed(2)}$`
    }
    
    // ------------Добавление------------ \\

    { // Додавання всіх елементів price до контейнеру
        refs.btn.price.containerEl.appendChild(refs.btn.price.contEl);   
        refs.btn.price.containerEl.appendChild(refs.btn.price.priceEl);   
        refs.btn.price.containerEl.appendChild(refs.btn.price.imgEl);   
    }

    { // Додавання всіх елементів settings до контейнеру
        refs.btn.settings.containerEl.appendChild(refs.btn.settings.imgEl); 
    }

    { // Додавання price та settings до контейнеру btn
        refs.btn.containerEl.appendChild(refs.btn.settings.containerEl);
        refs.btn.containerEl.appendChild(refs.btn.price.containerEl);
    }

    { // Додавання всіх елементів до основного контейнеру
        refs.containerEl.appendChild(refs.imgEl)
        refs.containerEl.appendChild(refs.nameEl)
        refs.containerEl.appendChild(refs.descriptionEl)
        refs.containerEl.appendChild(refs.btn.containerEl)
    }
    

    refs.imgEl.classList.add("img");
    refs.containerEl.classList.add("card");

    refs.btn.containerEl.classList.add("main");

    refs.btn.containerEl.classList.add("box");
    refs.btn.settings.containerEl.classList.add("box");
    refs.btn.price.containerEl.classList.add("box");
    
    refs.btn.settings.imgEl.classList.add("icon");
    refs.btn.price.imgEl.classList.add("icon");

    refs.btn.settings.containerEl.classList.add("settings-box");
    refs.btn.price.containerEl.classList.add("purchase-box");

    
    cardsEl.appendChild(refs.containerEl);;
}

document.body.appendChild(cardsEl)