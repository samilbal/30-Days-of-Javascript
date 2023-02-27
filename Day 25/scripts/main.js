let languageTopTen;
let populationTopTen;

//top ten population
countries_data.sort(
  (a, b) => parseFloat(b.population) - parseFloat(a.population)
);
populationTopTen = countries_data.splice(0, 10);
console.log(populationTopTen);

//top ten languages
let languagesArray = [];
countries_data.map((country) => {
  country.languages.forEach((language) => {
    languagesArray.push(language);
  });
});

let languagesSet = new Set(languagesArray);

let counts = [];
let count = {};

for (const l of languagesSet) {
  let filteredLang = languagesArray.filter((lng) => lng === l);
  counts.push({ lang: l, count: filteredLang.length });
}

counts.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
languageTopTen = counts.splice(0, 10);
console.log(languageTopTen);

const createBar = (barWidth) => {
  // create svg container and set width and height
  let barSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  barSvg.setAttribute("height", 50);
  barSvg.setAttribute("width", 150);
  // create a dynamic width rect element and add it to the svg container
  barSvg.innerHTML = `<rect y="0" height="50" width=${barWidth} transform="translate(0,0)" ></rect>`;
  return barSvg;
};

// check which page is on at the moment
let pageCheck = 0;

const populationClick = () => {
  if ((pageCheck === 0) | (pageCheck === 2)) {
    let graphs = document.querySelector(".graphs");
    graphs.innerHTML = " ";
    populationTopTen.forEach((country) => {
      let graphs = document.querySelector(".graphs");
      let dataCell = document.createElement("div");
      let population = document.createElement("div");
      let cellContainer = document.createElement("div");
      dataCell.classList.add("cell");
      cellContainer.classList.add("cell-container");
      population.innerHTML = country.population.toLocaleString("en-US");
      dataCell.innerHTML = country.name;
      dataCell.appendChild(population);
      cellContainer.appendChild(dataCell);

      let dataWidth = country.population / 1200000;
      cellContainer.appendChild(createBar(dataWidth));
      graphs.append(cellContainer);
      pageCheck = 1;

      let feedback = document.querySelector(".feedback");
      feedback.innerHTML = "10 Most Populated Countries Around The World";
    });
  }
};

const languageClick = () => {
  if ((pageCheck === 0) | (pageCheck === 1)) {
    let graphs = document.querySelector(".graphs");
    graphs.innerHTML = " ";
    languageTopTen.forEach((language) => {
      let dataCell = document.createElement("div");
      let cellContainer = document.createElement("div");
      let langCount = document.createElement("div");
      dataCell.classList.add("cell");
      cellContainer.classList.add("cell-container");
      dataCell.innerHTML = language.lang;
      cellContainer.appendChild(dataCell);
      langCount.innerHTML = language.count;
      dataCell.appendChild(langCount);

      let dataWidth = language.count * 25;
      cellContainer.appendChild(createBar(dataWidth));
      graphs.append(cellContainer);
      pageCheck = 2;

      let feedback = document.querySelector(".feedback");
      feedback.innerHTML = "10 Most Spoken Languages Around The World";
    });
  }
};

let subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently we have ${countries_data.length} countries`;
