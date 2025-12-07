let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let card_Sec = document.querySelector(".card-sec");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  // console.log(inputs[0].value, inputs[1].value, inputs[2].value);


  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");
  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value)
  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;
  let p = document.createElement("p");
  p.textContent = inputs[3].value;
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);
  card_Sec.appendChild(card)
  inputs.forEach(function (inp) {
    if (inp.type !== "Submit") {
      inp.value = "";
    }
  })
})
