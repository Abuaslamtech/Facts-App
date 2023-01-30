let facts = document.getElementById("facts");
let btn = document.getElementById("btn");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2b5c167fbbmsh9a02657ac160972p1030ccjsn01cd69817e19",
    "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
  },
};

function generateFacts() {
  fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", options)
    .then((res) => res.json())
    .then((data) => (facts.innerHTML = data[0].fact))
    .catch((err) => console.error(err));
}
generateFacts();
btn.addEventListener("click", generateFacts);
