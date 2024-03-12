import logo from './ftruck.png';
const homeDom = ()=> {
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

let mylogo = document.createElement("img");
mylogo.src = logo;

let title = document.createElement("div");
title.classList.add('title');
let h1Title = document.createElement("h1");
h1Title.textContent = "FoodPack";
title.appendChild(h1Title);
let h3Title = document.createElement("h3");
h3Title.textContent = "A Bundle of various cuisines, all packed into one place.";
title.appendChild(h3Title);

let card1 = document.createElement("div");
card1.classList.add('card');
let h1Card1 = document.createElement("h1");
h1Card1.textContent = "Timings:";
card1.appendChild(h1Card1);
let h3Card1_1 = document.createElement("h3");
h3Card1_1.textContent = "11am to 8pm - Monday to Saturday";
card1.appendChild(h3Card1_1);
let h3Card1_2 = document.createElement("h3");
h3Card1_2.textContent = "9am to 6pm - Sunday";
card1.appendChild(h3Card1_2);

let card2 = document.createElement("div");
card2.classList.add('card');
let h1Card2 = document.createElement("h1");
h1Card2.textContent = "Location:";
card2.appendChild(h1Card2);
let h3Card2 = document.createElement("h3");
h3Card2.textContent = "Anywhere you want. We get the food to you!";
card2.appendChild(h3Card2);

contentContainer.appendChild(title);
contentContainer.appendChild(mylogo);
contentContainer.appendChild(card1);
contentContainer.appendChild(card2);
}

export default homeDom;