
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
  
  // Javascript til kontaktformular starter her
  
function kontaktform() { 
        var name = document.forms["Form"]["Navn"]; 
        var email = document.forms["Form"]["EMail"]; 
        var what = document.forms["Form"]["Emne"]; 
        
  
        if (name.value == "") { 
            window.alert("Indtast venligst navn"); 
            name.focus(); 
            return false; 
        } 
  
  
        if (email.value == "") { 
            window.alert( 
              "Indtast venligst en gyldig email adresse"); 
            email.focus(); 
            return false; 
        } 

  
        if (what.selectedIndex < 1) { 
            alert("Vælg et emne"); 
            what.focus(); 
            return false; 
        } 
  
        return true; 
    } 
