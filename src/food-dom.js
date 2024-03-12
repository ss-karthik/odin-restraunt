import idli from './Idly.jpg';
import dosa from './Dosa.jpg';
import paratha from './Paratha.jpg';


const foodDom = () => {
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    let title = document.createElement("div");
    title.classList.add('title');
    let h1Title = document.createElement("h1");
    h1Title.textContent = "Menu";
    title.appendChild(h1Title);
    let h3Title = document.createElement("h3");
    h3Title.textContent = "Choose from an array of amazing dishes!";
    title.appendChild(h3Title);

    let card1 = document.createElement("div");
    card1.classList.add('card');
    let h1c1 = document.createElement("h1");
    h1c1.textContent = "Idli";
    card1.appendChild(h1c1);
    let imgc1 = document.createElement("img");
    imgc1.src = idli;
    card1.appendChild(imgc1);
    let h3c1 = document.createElement("h3");
    h3c1.textContent = "Idli is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India";
    card1.appendChild(h3c1);

    let card2 = document.createElement("div");
    card2.classList.add('card');
    let h1c2 = document.createElement("h1");
    h1c2.textContent = "Dosa";
    card2.appendChild(h1c2);
    let imgc2 = document.createElement("img");
    imgc2.src = dosa;
    card2.appendChild(imgc2);
    let h3c2 = document.createElement("h3");
    h3c2.textContent = "A dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.";
    card2.appendChild(h3c2);

    let card3 = document.createElement("div");
    card3.classList.add('card');
    let h1c3 = document.createElement("h1");
    h1c3.textContent = "Paratha";
    card3.appendChild(h1c3);
    let imgc3 = document.createElement("img");
    imgc3.src = paratha;
    card3.appendChild(imgc3);
    let h3c3 = document.createElement("h3");
    h3c3.textContent = "Aloo paratha is a paratha stuffed with potato filling native to the Indian subcontinent. It is traditionally eaten for breakfast.";
    card3.appendChild(h3c3);

    contentContainer.appendChild(title);
    contentContainer.appendChild(card1);
    contentContainer.appendChild(card2);
    contentContainer.appendChild(card3);
}

export default foodDom;