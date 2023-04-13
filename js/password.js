function verify() {
  let password = document.getElementById("password").value;
  let passLen = password.length;

  if (password === "") {
    document.getElementById("result").innerHTML = '<span style="color: red;">Enter password.</span>';
  }
  else if (passLen <= 7) {
    document.getElementById("result").innerHTML = '<span style="color: red;">Password is too weak.</span>';
  }
}
