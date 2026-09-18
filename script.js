let totalElement = document.getElementById("total-problems");
let easyElement = document.getElementById("easy-problems");
let mediumElement = document.getElementById("medium-problems");
let hardElement = document.getElementById("hard-problems");

fetch("http://localhost:3000/stats")
  .then((response) => response.json())
  .then((data) => {
    totalElement.textContent = data.total;
    easyElement.textContent = data.easy;
    mediumElement.textContent = data.medium;
    hardElement.textContent = data.hard;
  });
