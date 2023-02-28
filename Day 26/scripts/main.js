// left this one a bit rough around the edges but I think it's time to move on.

const cardContainer = document.querySelector("#card-container");

// generate cards
countries.forEach((country) => {
  // create card
  const card = document.createElement("li");
  card.classList.add("card");
  // create card title
  const cardTitle = document.createElement("a");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = `${country}`;
  // append the title to the card
  card.appendChild(cardTitle);
  // append the card to the card container
  cardContainer.appendChild(card);
});

// filter items depending on the input
filterItems = () => {
  let input, filter, cards, titles;
  let headerNumber = document.getElementById("header-number");
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  cards = document.getElementById("card-container");
  titles = cards.getElementsByTagName("li");

  for (let i = 0; i < titles.length; i++) {
    const element = titles[i].getElementsByTagName("a")[0];
    let txtValue = element.textContent || element.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      titles[i].style.display = "";
    } else {
      titles[i].style.display = "none";
    }
  }
  let titlesDisplayed = [];
  for (const title in titles) {
    if (Object.hasOwnProperty.call(titles, title)) {
      const element = titles[title];
      if (element.style.display === "") {
        titlesDisplayed.push(element);
      } else continue;
    }
  }

  headerNumber.innerText = `Countries that start with ${input.value} are ${titlesDisplayed.length}`;
};
