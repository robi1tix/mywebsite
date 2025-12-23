const characters = {
  makoto: {
    name: "Makoto Naegi",
    image: "https://i.pinimg.com/originals/71/a4/92/71a492b1f46b83cf38803de1eb2a257e.jpg",
    description: "Главный герой Danganronpa."
  },
  kyoko: {
    name: "Kyoko Kirigiri",
    image: "https://i.pinimg.com/736x/d4/c1/86/d4c1868a265ab3a4bd42b6251fd10af3.jpg",
    description: "Загадочная девушка-детектив."
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");


if (characters[id]) {
  document.getElementById("name").textContent = characters[id].name;
  document.getElementById("image").src = characters[id].image;
  document.getElementById("description").textContent = characters[id].description;
}
