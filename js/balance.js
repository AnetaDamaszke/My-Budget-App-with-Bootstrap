function showStatement() {

  var balanceSum = document.getElementById("balanceSum").value;

  if(balanceSum > 0) document.getElementById("balanceSumStatement").innerHTML = "Gratulacje! Świetnie zarządzasz finansami!";
  else document.getElementById("balanceSumStatement").innerHTML = "Uważaj! Wpadasz w długi!";
}

window.onload = showStatement;