const aboutDom = () => {
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    let title = document.createElement("div");
    title.classList.add('title');
    let h1Title = document.createElement("h1");
    h1Title.textContent = "About Us";
    title.appendChild(h1Title);
    let h3Title = document.createElement("h3");
    h3Title.textContent = "What is FoodPack all about?";
    title.appendChild(h3Title);

    let card1 = document.createElement("div");
    card1.classList.add('card');
    let h1c1 = document.createElement("h1");
    h1c1.textContent = "Why did this begin?";
    card1.appendChild(h1c1);
    let h3c1 = document.createElement("h3");
    h3c1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa dolores nihil sed repellendus. Culpa minima ipsam exercitationem a non esse amet cum, error molestiae harum reprehenderit rem dolores ut?";
    card1.appendChild(h3c1);

    let card2 = document.createElement("div");
    card2.classList.add('card');
    let h1c2 = document.createElement("h1");
    h1c2.textContent = "The Future";
    card2.appendChild(h1c2);
    let h3c2 = document.createElement("h3");
    h3c2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid dolorum eligendi recusandae blanditiis doloremque quo repellat quas tempora, non et maxime in quod molestiae beatae quasi enim quaerat ratione.";
    card2.appendChild(h3c2);

    contentContainer.appendChild(title);
    contentContainer.appendChild(card1);
    contentContainer.appendChild(card2);
}

export default aboutDom;