const username = document.querySelector("#username");
const surname = document.querySelector("#surname");
const img = document.querySelector("#image");
const block = document.querySelector("#block");
const button = document.querySelector("#btn");
const age = document.querySelector('#age')

function createCard(data) {
  return `
    <div class="card">
    <img src="${data.img}" alt="userning rasmi">
    <h3>${data.name}</h3>
    <p>${data.surname}</p>
    <h4>${data.age}</h4>
</div>
    `;
}
button &&
  button.addEventListener("click", function (value) {
    value.preventDefault();
    let user = {
      img: img.value,
      name: username.value,
      surname: surname.value,
      age : age.value
    };

    let card = createCard(user);
    block.innerHTML += card;
  });

const card = document.querySelector(".cards")