const setImg = (value) => {
  let allImg = document.querySelectorAll(".planet-image");
  for (let i = 0; i < allImg.length; i++) {
    const element = allImg[i];
    element.classList.add("hidden");
  }
  const targetImg = document.getElementById(`${value}`);
  targetImg.classList.remove("hidden");
};
const weight = (value) => {
  let result;
  let mass = document.getElementById("mass").value;
  switch (value) {
    case "mercury":
      result = (mass / 9.81) * 3.7;
      break;

    case "venus":
      result = (mass / 9.81) * 8.87;
      break;

    case "earth":
      result = mass * 1;
      break;

    case "mars":
      result = (mass / 9.81) * 3.711;
      break;

    case "jupiter":
      result = (mass / 9.81) * 24.7;
      break;

    case "saturn":
      result = (mass / 9.81) * 10.44;
      break;

    case "uranus":
      result = (mass / 9.81) * 8.69;
      break;

    case "neptune":
      result = (mass / 9.81) * 11.15;
      break;

    default:
      break;
  }
  console.log(result);
  return result;
};
const setDescription = (value) => {
  let description = document.querySelector(".description");
  let capitalPlanet = value.charAt(0).toUpperCase() + value.slice(1);
  description.innerHTML = `The weight of the object in ${capitalPlanet} is :${weight(
    value
  ).toFixed(2)} `;
};

const calculate = () => {
  value = document.getElementById("planet").value;

  if (!document.getElementById("mass").value) {
    document.querySelector(".flex-container").innerHTML = "mass is required";
  } else {
    setImg(value);
    setDescription(value);
  }
};
