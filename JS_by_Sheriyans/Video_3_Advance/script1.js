const form = document.querySelector("form");
const photo = document.querySelector("#url");
const username = document.querySelector("#name");
const bio = document.querySelector("#bio");
const role = document.querySelector("#role");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this))
  },
  submitForm: function (e) {
    e.preventDefault();
    console.log(this);
    this.addUser();
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    document.querySelector(".card-sec").innerHTML = "";
    this.users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-lg overflow-hidden";

      const img = document.createElement("img");
      img.src = user.photo;
      img.alt = "Profile";
      img.className = "w-full h-52 object-cover";

      const content = document.createElement("div");
      content.className = "p-5";

      const name = document.createElement("h4");
      name.className = "text-xl font-bold";
      name.textContent = user.username;

      const role = document.createElement("p");
      role.className = "text-blue-600 font-medium";
      role.textContent = user.role;

      const bio = document.createElement("p");
      bio.className = "text-gray-600 mt-3";
      bio.textContent = user.role;

      const btnContainer = document.createElement("div");
      btnContainer.className = "flex gap-3 mt-4";

      const viewBtn = document.createElement("button");
      viewBtn.className =
        "flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-black";
      viewBtn.textContent = "View Profile";

      const removeBtn = document.createElement("button");
      removeBtn.className =
        "flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700";
      removeBtn.textContent = "Remove";

      btnContainer.append(viewBtn, removeBtn);
      content.append(name, role, bio, btnContainer);
      card.append(img, content);

      document.querySelector(".card-sec").appendChild(card);
    })
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      bio: bio.value,
      role: role.value,
      photo: photo.value,
    })
  },

}

userManager.init();
