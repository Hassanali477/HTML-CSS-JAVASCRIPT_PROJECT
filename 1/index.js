const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");
let numberOfWords;
const generateWord = (n) => {
  let text = "";
  const letter = "dgasgdjhgashjddasdasdasddsad";
  for (let i = 0; i < n; i++) {
    const random = (Math.random() * 25).toFixed(0);
    text += letter[random];
  }
  return text;
};
const getData = () => {
  numberOfWords = Number(input.value);
  const para = document.createElement("p");
  let data = "";
  for (let i = 0; i < numberOfWords; ++i) {
    const randomNumber = (Math.random() * 15).toFixed(0);
    data += generateWord(randomNumber);
    data += " ";
  }
  para.innerText = data;
  para.setAttribute("class", "myParas");
  container.append(para);
};
