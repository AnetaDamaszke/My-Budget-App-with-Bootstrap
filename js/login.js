function checkEmail() {

   var email = document.getElementById("email").value;
   var userEmail = "aneta@gmail.pl";
   
    if (email == userEmail) return true;
    else {
      document.getElementById("loginStatement").innerHTML = "Niepoprawny email!"
      return false;
    }
}

function checkPassword() {

  var password = document.getElementById("password").value;
  var userPassword = "123";

  if (password == userPassword) return true; 
  else {
    document.getElementById("loginStatement").innerHTML = "Niepoprawne hasło!"
    return false;
  }
}

function checkUser() {

  if ((checkEmail() == true) && (checkPassword() == true)) {
      window.open("menu.html", "_self");
  }
  else document.getElementById("loginStatement").innerHTML = "Błąd logowania!";
}
