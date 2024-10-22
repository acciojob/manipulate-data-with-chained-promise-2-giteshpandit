// Function to return a promise that resolves with the array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    resolve([1, 2, 3, 4]); // Return the array immediately, without delay
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      document.getElementById("output").innerText = `${evenNumbers.join(",")}`;
      resolve(evenNumbers);
    }, 1000); // Delay of 1 second to simulate asynchronous operation
  });
}

// Function to multiply even numbers by 2
function multiplyNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      document.getElementById("output").innerText = `${multipliedNumbers.join(",")}`;
      resolve(multipliedNumbers);
    }, 2000); // Delay of 2 seconds after filtering
  });
}

// Chaining the promises
getNumbers()
  .then(numbers => filterEvenNumbers(numbers))
  .then(evenNumbers => multiplyNumbers(evenNumbers))
  .catch(error => console.error(error));


