//This part of the main.js is the code for the page

const countFlavors = () => {
  const input = document.getElementById('flavorInput').value;
  const flavors = input.split(',');
  
  const flavorCounts = {};
  flavors.forEach((flavor) => {
      flavor = flavor.trim();
      flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  });

  const flavorCountsSection = document.getElementById('flavorCounts');
  flavorCountsSection.innerHTML = '<h3>Flavor Counts:</h3>';
  for (const flavor in flavorCounts) {
      flavorCountsSection.innerHTML += `<h4>${flavor}: ${flavorCounts[flavor]}</h4>`;
  }
}


//This part is the code for the console.
const contador = (input) => {
  const flavors = input.split(',');

  const flavorCounts = {};

  for (let i = 0; i < flavors.length; i++) {
      const flavor = flavors[i].trim(); 

      if (flavorCounts[flavor]) {
          flavorCounts[flavor]++;
      } else {
          flavorCounts[flavor] = 1;
      }
  }

  console.log('Flavor Counts:');
  for (const flavor in flavorCounts) {
      console.log(`${flavor}: ${flavorCounts[flavor]}`);
  }
}

alert("Open the console")
const userInput = prompt("Please enter your list of comma-separated froyo flavors:");
contador(userInput);
