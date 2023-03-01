/* Cuando el usuario toca el boton abre y cierra el menú*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Cerrar el menu cuando el usuario toca fuera
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

