<?php
$servidor = "127.0.0.1:3306";
$usuario = "root";
$senha = "6247";
$bancoDados = "loja";

try{
    $conn = mysqli_connect($servidor,$usuario,$senha,$bancoDados);
}catch(mysqli_sql_exception $e){
    echo "". $e->getMessage();
}