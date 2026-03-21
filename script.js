function openMenu() {
  function openMenu() {
  let menu = document.getElementById("menu");
  if(menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}
/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.style.left = "-250px"; // hide menu
}

setInterval(() => {
  if(slides.length > 0){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
}, 4000);

<script>
function toggleMenu() {
  let menu = document.getElementById("sideMenu");
  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}
</script>