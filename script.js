//your JS code here. If required.
function delayMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

const outputDiv = document.getElementById('output');

delayMessage().then((message) => {
  outputDiv.innerHTML = message;
});
