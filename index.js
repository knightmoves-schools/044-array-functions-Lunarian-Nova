// Create the initial automobiles array
let automobiles = ['car', 'truck', 'motorcycle'];

// Add 'airplane' and 'skateboard' to the end
automobiles.push('airplane', 'skateboard');

// Add 'bike' and 'helicopter' to the front
automobiles.unshift('bike', 'helicopter');

// Create automobilesCopy as a string template
let automobilesCopy = `${automobiles.join(',')}`;

// Remove the last item (skateboard)
automobiles.pop();

// Remove the first item (bike)
automobiles.shift();

// Update the HTML element
document.getElementById('result').innerHTML = automobiles.toString();
