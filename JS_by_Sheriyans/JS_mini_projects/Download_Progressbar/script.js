let count = 0;
let progress = document.querySelector(".progress");
let perCount = document.querySelector(".perCount");
let h1 = document.querySelector("h1");


let intv = setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    perCount.textContent = `${count} %`;
  } else {
    h1.textContent = "Downloaded✅";
    clearInterval(intv);
  }
}, 30);
