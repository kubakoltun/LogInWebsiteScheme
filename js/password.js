function weryfikuj()
{

var password = document.getElementById("password").value;
var d = password.length;

if (password == "")
{
document.getElementById("result").innerHTML = '<span style="color: red;">Enter password.</span>';
}
else if (d <=7)
{
document.getElementById("result").innerHTML = '<span style="color: red;">Password is too weak.</span>';
}

}