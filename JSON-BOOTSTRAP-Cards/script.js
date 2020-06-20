// Create Arr //

allusers = [];
allusers = users;

/////////////////////////

// Add users to HTML with DOM //

allusers.forEach(user => {
    const cardSection = document.getElementById("cardSection");
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("card");
    cardsDiv.setAttribute('style', "width: 18rem");
    cardsDiv.setAttribute('style', "display: inline-block");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-body");
    const cardUserName = document.createElement("h5");
    cardUserName.classList.add("card-title");
    const cardUserNick = document.createElement("p");
    cardUserNick.classList.add("card-text");
    const cardUserMail = document.createElement("p");
    cardUserMail.classList.add("card-text");
    const cardUserWeb = document.createElement("a");
    cardUserWeb.classList.add("card-text");

    cardSection.append(cardsDiv);
    cardsDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardUserName);
    cardDiv.appendChild(cardUserNick);
    cardDiv.appendChild(cardUserMail);
    cardDiv.appendChild(cardUserWeb);

    cardUserName.textContent = user.name;
    cardUserNick.textContent = user.username;
    cardUserMail.textContent = user.email;
    cardUserWeb.textContent = 'Website';
    cardUserWeb.setAttribute('href', user.website);
});

/////////////////////////