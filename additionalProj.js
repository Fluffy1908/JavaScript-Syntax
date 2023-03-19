// Define arrays with possible values for each piece of data
const data1 = ["Today", "Tomorrow", "Yesterday", "Next week"];
const data2 = ["you will", "you should", "you might", "you could"];
const data3 = ["go for a walk", "read a book", "call a friend", "try something new"];

// Generate random index values for each array
const index1 = Math.floor(Math.random() * data1.length);
const index2 = Math.floor(Math.random() * data2.length);
const index3 = Math.floor(Math.random() * data3.length);

// Combine the randomly selected values into a message
const message = `${data1[index1]}, ${data2[index2]} ${data3[index3]}.`;

// Output the message to the console
console.log(message);
