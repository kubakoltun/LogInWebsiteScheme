function verify() {
  let password = document.getElementById("password").value;
  const passLen = password.length;
  
  var capitalLetters = password.match(/[A-Z]/g);
  var smallLetters = password.match(/[a-z]/g);
  var numbersIn = password.match(/\d/g);
  var specialCharacters = password.match(/[`~-=!@#$%^&*()_+{}[];':",./<>?]/g);
  
  var countcapitalLetters = capitalLetters.length;
  var countsmallLetters = smallLetters.length;
  var countnumbersIn = numbersIn.length;
  var countspecialCharacters = specialCharacters.length;
  
  if (password === "") {
      document.getElementById("result").innerHTML = '<span style="color: black;">Enter password.</span>';
  }
  else if (passLen >= 12 && countsmallLetters > 3 && countcapitalLetters > 3 && countnumbersIn > 2 && countspecialCharacters >= 2) {
      document.getElementById("result").innerHTML = '<span style="color: green;">Your password is Great</span>';
  }
  else if (passLen >= 9 && countsmallLetters > 2 && countcapitalLetters > 2 && countnumbersIn >= 2) {
      document.getElementById("result").innerHTML = '<span style="color: #80ff80;">Your password is Good</span>';
  }
  else if (passLen >= 8 && countsmallLetters >= 1 && countcapitalLetters >= 1 && countnumbersIn >= 1) {
      document.getElementById("result").innerHTML = '<span style="color: #b8de57;">Your password is Enough</span>';
  }
  else if (passLen > 4 && passLen < 8) {
      document.getElementById("result").innerHTML = '<span style="color: #de3c3c;">Your password is Weak</span>';
  } else {
      document.getElementById("result").innerHTML = '<span style="color: #e31212;">Your password is Dangerous</span>';
  }
}
