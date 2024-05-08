const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");
const addName = () => {
  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");
  tag.innerText = `Hey I'm ${name.value}`;
  tagsContainer.appendChild(tag);
};
