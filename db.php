<?php 

	$conn = mysqli_connect("localhost", "root", "", "db") or die ("Błąd połączenia z bazą danych!");
	
		$login = $_POST["login"];
		$haslo = $_POST["password"];
		$q = ""
		$result = mysqli_query($conn, $q) or die ("Please enter valid informations.");
		
	mysqli_close($conn);
	
?>