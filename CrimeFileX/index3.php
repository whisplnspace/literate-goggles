<?php
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username ,$password);

    if(!$con){
        die("connection to this database failed due to" .mysqli_connect_error());
    }
    $Name = $_POST['Name'];
    $Email =$_POST['Email'];
    $Password =$_POST['Password'];
    $Age =$_POST['Age'];
    $Phone =$_POST['Phone'];
    $Aadharno =$_POST['Aadharno'];
    $Address =$_POST['Address'];
    $Casedetails =$_POST['Other'];
    $sql = "INSERT INTO `Registration` (`Name`, `Email` , `Password` ,`Age`, `Gender`, `Phone`,`Aadharno` , `Address`, `Other`) VALUES ('$Name','  $Email', '$Password', '$Age', '$Phone', '$Aadharno', '$Address','$Casedetails';)" ;
    echo $sql;

?>
