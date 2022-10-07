const userInput = document.querySelector("#input");
const result = document.querySelector(".result");

function countWord() {
  const regex = /\s+/gi;
  const userText = userInput.value.trim().replace(regex, "").toLowerCase();
  const testText = userText
    .split("")
    .map((word) => word.split("").reverse())
    .reverse()
    .join("");
  if (userText === testText) {
    result.innerText = "Yes, It Is a Palindrome";
  } else {
    result.innerText = "No., It Is not a Palindrome";
  }
}
