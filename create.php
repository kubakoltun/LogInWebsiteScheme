<?php 

$conn = mysqli_connect("localhost", "root", "", "db") or die("Database connection error!");
	
		$login = $_POST["login"];
		$haslo = $_POST["password"];
		$q = "CREATE USER '$login'@'localhost' IDENTIFIED BY '$password'";
		$result = mysqli_query($conn, $q) or die ("User creation failed.");
		
	mysqli_close($conn);
	
?>