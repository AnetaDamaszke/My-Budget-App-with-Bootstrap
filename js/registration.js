function checkName() {

   var name = document.getElementById("name").value;
   
   if (name == "") {
    document.getElementById("statement").innerHTML = "Podaj imię!"
    return false;
  }
   else return true;
}

function validateEmail() {

  var email = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.match(mailformat)) return true;
  else {
    document.getElementById("statement").innerHTML = "Niepoprawny adres e-mail!";
    return false;
  }
}


function checkPassword() {

  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  if (password1 == "") {
    document.getElementById("statement").innerHTML = "Nie podano hasła!" ;
    return false;
  }
  else {
    if (password2 == "") {
      document.getElementById("statement").innerHTML = "Powtórz hasło!" ;
      return false;
    }
    else {
      if (password1 == password2) return true;
    else {
      document.getElementById("statement").innerHTML = "Podano różne hasła!" ;
      return false;
    }
    } 
  }
}

function openNewSite() {
  window.open("login.html", "_self");
}

function validateForm() {

  if ((validateEmail() == true) && (checkPassword() == true) && (checkName() == true)) {
    document.getElementById("statement").innerHTML = "Konto zostało pomyślnie utworzone!";
    document.getElementById("reigistrationButton").innerHTML = "Zaloguj";
    document.getElementById("reigistrationButton").addEventListener("click", openNewSite);
  }

}
