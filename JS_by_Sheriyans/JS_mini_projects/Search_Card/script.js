let players = [
  {
    url: "https://i.pinimg.com/1200x/48/af/d7/48afd78d5117b2a65037d72425f0a397.jpg",
    name: "rohit",
    position: "ODIs 1st Opener Batter"
  },
  {
    url: "https://i.pinimg.com/736x/4d/c9/01/4dc901ba928fbcf4087abecb8262dd2c.jpg",
    name: "subhman",
    position: "ODIs 2nd Opener Batter"
  },
  {
    url: "https://i.pinimg.com/736x/0e/b3/51/0eb3518f8bbbd8fee1dfe677ba3948b0.jpg",
    name: "virat",
    position: "ODIs 3rd Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/db/a0/ca/dba0ca92c563651d2fe610b4a614753c.jpg",
    name: "iyer",
    position: "ODIs 4th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/fc/2e/18/fc2e18430d663b239477134ee99b065d.jpg",
    name: "rahul",
    position: "ODIs 5th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/21/8c/51/218c516eb16077774f251ddc606ced3c.jpg",
    name: "hardik",
    position: "ODIs 6th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/18/fd/8d/18fd8d13a3a65fe8d76de98f9acaf8df.jpg",
    name: "jadeja",
    position: "ODIs 7th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/11/9c/b3/119cb3efcf78836e022d056122903503.jpg",
    name: "kuldeep",
    position: "ODIs 8th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/04/c8/26/04c8262bddd3dc76f11da5ff1bee693a.jpg",
    name: "shami",
    position: "ODIs 9th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/06/8f/28/068f28ea1b0bc6e8bfa703d2daf62962.jpg",
    name: "bumrah",
    position: "ODIs 10th Number Batter"
  },
  {
    url: "https://i.pinimg.com/736x/46/44/49/464449f49db1decb572cb6a6fefc7683.jpg",
    name: "siraj",
    position: "ODIs 11th Number Batter"
  },
]

let cardContainer = document.querySelector(".card-container")

function playersRender(arr) {

  arr.forEach(function (player) {

    let card = document.createElement("div");
    card.classList.add("card");
    let profilePic = document.createElement("div");
    profilePic.classList.add("profile-pic");
    let img = document.createElement("img");
    img.setAttribute("src", player.url);
    let profileDetails = document.createElement("div");
    profileDetails.classList.add("profile-details");

    let h1 = document.createElement("h1");
    h1.textContent = player.name;

    let p = document.createElement("p");
    p.textContent = player.position;

    profileDetails.append(h1);
    profileDetails.append(p);

    profilePic.append(img);
    card.append(profilePic);
    card.append(profileDetails);
    cardContainer.appendChild(card);
  });
}
playersRender(players);


let input = document.querySelector("input");

input.addEventListener("input",function(singlePlayer){
  let filteredPlayer = players.filter(function(singlePlayer){
    return singlePlayer.name.startsWith(input.value);
  })
  cardContainer.innerHTML = "";
  playersRender(filteredPlayer);
})

