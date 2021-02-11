const url = "https://kea-alt-del.dk/t7/api/seasons";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(getData);

function getData(data) {
  data.forEach(showSeason);
}

function showSeason(season) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  console.log(`Images/${season.season}.jpeg`);
  copy.querySelector("img").src = `Images/${season.season}.jpeg`;
  copy.querySelector("a").href = `productlist.html?season=${season.season}`;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
