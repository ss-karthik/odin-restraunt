import './style.css';
import homeDom from './home-dom.js';
import foodDom from './food-dom.js';
import aboutDom from './about-dom.js';

console.log("Everything is working!");

homeDom();

let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", function() {
    homeDom();
})

let foodBtn = document.getElementById("food");
foodBtn.addEventListener("click", function() {
    foodDom();
})

let aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", function(){
    aboutDom();
})
