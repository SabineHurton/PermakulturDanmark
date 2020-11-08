
/* HEY SMUKKE. DET HER JS KONTROLLERER DROPDOWN MENU. SCROLL NED TIL BUNDEN OG INPUT DERFRA*/


/* Hvis man klikker på knappen kommer den enten frem eller forsvinder */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Lukker drop down hvis der klikkes uden for menuen.
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  /*-------------------------- input herfra