//your JS code here. If required.
// Function to return a promise that resolves with the array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      document.getElementById("output").innerText = `Even numbers: ${evenNumbers.join(", ")}`;
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      document.getElementById("output").innerText = `Multiplied numbers: ${multipliedNumbers.join(", ")}`;
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Chaining the promises
getNumbers()
  .then(numbers => filterEvenNumbers(numbers))
  .then(evenNumbers => multiplyNumbers(evenNumbers))
  .catch(error => console.error(error)); // Handling any potential errors

