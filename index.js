let search_input = document.querySelector(".search_input");
let search_btn = document.querySelector("#search_btn");

search_btn.onclick = function () {
  let url = "https://www.google.com/search?q=" + search_input.value;
  window.open(url);
};
