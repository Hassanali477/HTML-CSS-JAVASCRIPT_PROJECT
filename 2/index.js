const Zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackround = () => {
  switch (Zodiac.value) {
    case "aries":
      body.style.backgroundColor = "red";
      break;

    case "taurus":
      body.style.backgroundColor = "yellow";
      break;

    case "gemini":
      body.style.backgroundColor = "green";
      break;

    case "cancer":
      body.style.backgroundColor = "blue";
      break;

    case "leo":
      body.style.backgroundColor = "purple";
      break;

    case "virgo":
      body.style.backgroundColor = "orange";
      break;

    case "libra":
      body.style.backgroundColor = "pink";
      break;

    case "scorpio":
      body.style.backgroundColor = "brown";
      break;

    case "sagittarius":
      body.style.backgroundColor = "black";
      break;

    case "capricorn":
      body.style.backgroundColor = "grey";
      break;

    case "aquarius":
      body.style.backgroundColor = "white";

      break;

    case "pisces":
      body.style.backgroundColor = "cyan";
      break;

    default:
      body.style.backgroundColor = "white";
      break;
  }
};
