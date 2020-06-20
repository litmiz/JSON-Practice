// Create Arr //

allCoins = vCoins.data;

/////////////////////////

// Add coins to HTML with DOM //

allCoins.forEach(coin => {
    const coinsSection = document.getElementById("coinsSection");
    const coinDiv = document.createElement("div");
    coinDiv.classList.add("coin");
    const coinName = document.createElement("h3");
    const coinSym = document.createElement("p");
    const coinPriceUsd = document.createElement("p");

    coinsSection.append(coinDiv);
    coinDiv.appendChild(coinName);
    coinDiv.appendChild(coinSym);
    coinDiv.appendChild(coinPriceUsd);

    coinName.textContent = coin.name;
    coinSym.textContent = coin.symbol;
    coinPriceUsd.textContent = coin.priceUsd;
});

// allusers.forEach(user => {
//     const cardSection = document.getElementById("cardSection");
//     const cardsDiv = document.createElement("div");
//     cardsDiv.classList.add("card");
//     cardsDiv.setAttribute('style', "width: 18rem");
//     cardsDiv.setAttribute('style', "display: inline-block");
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add("card-body");
//     const cardUserName = document.createElement("h5");
//     cardUserName.classList.add("card-title");
//     const cardUserNick = document.createElement("p");
//     cardUserNick.classList.add("card-text");
//     const cardUserMail = document.createElement("p");
//     cardUserMail.classList.add("card-text");
//     const cardUserWeb = document.createElement("a");
//     cardUserWeb.classList.add("card-text");
