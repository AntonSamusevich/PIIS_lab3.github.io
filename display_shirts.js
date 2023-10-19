function displayFrontImages(data) {
    const tshirtContainer = document.getElementById("tshirt-container");
    
    data.forEach((shirt) => {
        for (const color in shirt.colors) {
            const tshirtDiv = document.createElement("div");
            tshirtDiv.className = "tshirt";
            
            //создаем элемент img 
            const frontImage = shirt.colors[color].front;
            const frontImageElement = document.createElement("img");
            frontImageElement.src = frontImage;
            frontImageElement.alt = `Front - ${color}`;
            tshirtDiv.appendChild(frontImageElement);
            
            //добавляем название майки
            const h2 = document.createElement("h2");
            h2.textContent = shirt.name;
            tshirtDiv.appendChild(h2);
            
            //добавляем описание майки
            const pDescription = document.createElement("p");
            pDescription.textContent = shirt.description;
            tshirtDiv.appendChild(pDescription);
            
            //добавляем стоимость майки
            const pPrice = document.createElement("p");
            pPrice.textContent = `Price: ${shirt.price}`;
            tshirtDiv.appendChild(pPrice);
            
            //добавляем список доступных цветов
            const colorsList = document.createElement("ul");
            colorsList.className = "colors-list";

            //создаем элемент для текста
            const availableColorsLabel = document.createElement("p");
            const colors = Object.keys(shirt.colors).join(", "); 
            availableColorsLabel.textContent = "Available colors: " + colors;
            colorsList.appendChild(availableColorsLabel);
            tshirtDiv.appendChild(colorsList);

            //создаем кнопку
            const seePageButton = document.createElement("button");
            seePageButton.innerText = "See Page";
            tshirtDiv.appendChild(seePageButton);
            
            //добавляем майку к контейнеру
            tshirtContainer.appendChild(tshirtDiv);
            
            break; 
        }
    });
}

//ожидание загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    displayFrontImages(shirts);
});
