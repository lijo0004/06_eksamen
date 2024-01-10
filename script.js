// sætter koden til specifikt at vælge id'et #burger-knap og når der klikkes på id'et. Når der klikkes på id'et igangsættes functionen 'toggleMenu'.
document.querySelector("#burger_knap").addEventListener("click", toggleMenu);

// her vises det hvad koden der lige er blevet henvis til gør
function toggleMenu() {
  // først har jeg sat burgerMenu om en variabel så man kan nøjes med at skrive 'burgerMenu' i stedet for 'document-querySelector("#burger_menu")'
  var burgerMenu = document.querySelector("#burger_menu");

  // hvis burgerMenu har klassen "hidden" tilføjet skal den fjernes
  if (burgerMenu.classList.contains("hide")) {
    burgerMenu.classList.remove("hide");
  }
  //hvis IKKE burgermenu har klassen "hidden" skal klassen tilføjes
  else {
    burgerMenu.classList.add("hide");
  }
}
