const secretKey = "It's a secret to everybody.";
const secretMessage = "With a secret like this, it's dangerous to go alone!";

localStorage.setItem(secretKey, secretMessage);

console.log("Secret message sent to localStorage");