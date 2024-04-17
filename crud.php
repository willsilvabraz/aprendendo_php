<?php
include_once("conexao.php");

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['email']) && isset($_POST['nome']) && isset($_POST['senha']) && isset($_POST['cargo'])) {
   
    echo cad_usuario($_POST['email'], $_POST['nome'], $_POST['senha'], $_POST['cargo']); 
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['prod_titulo']) && isset($_POST['prod_descricao']) && isset($_POST['prod_quantidade']) && isset($_POST['prod_preco'])) {
   
    echo cad_produtos($_POST['prod_titulo'], $_POST['prod_descricao'], $_POST['prod_quantidade'], $_POST['prod_preco']); 
}

if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['ler_estoque'])){
    echo ler_estoque();
}


function cad_usuario($email, $nome, $senha, $cargo){
    global $conn;
    try{
        $query = "insert into funcionarios ( func_nome, func_cargo, func_email, func_senha ) values ('$nome', '$cargo', '$email', '$senha' );";
        mysqli_query($conn, $query);
        return "cadastro funcionario ok";
    }catch(mysqli_sql_exception $e){
        return $e->getMessage();
    }
}

function cad_cargos($carg_titulo, $carg_salario){
    global $conn;
    try{
        $query = "insert into cargos ( carg_titulo, carg_salario ) values ('$carg_titulo', '$carg_salario')";
        mysqli_query($conn, $query);
        return "cadastro cargo ok";
    }catch(mysqli_sql_exception $e){
        return $e->getMessage();
    }
}

function cad_produtos($prod_titulo, $prod_descricao, $prod_quantidade, $prod_preco){
    global $conn;
    try{
        $query = "insert into produtos ( prod_titulo, prod_descricao, prod_quantidade, prod_preco) values ('$prod_titulo', '$prod_descricao', '$prod_quantidade', '$prod_preco')";
        mysqli_query($conn, $query);
        return "cadastro produto ok";
    }catch(mysqli_sql_exception $e){
        return $e->getMessage();
    }
}

function ler_estoque(){
    global $conn;
    $query = "SELECT * FROM produtos";
    $produtos = mysqli_query($conn, $query);
    $carrinho = array();

    class Carrinho {
        
    }

    for($i = 0; $i < mysqli_num_rows($produtos); $i++){
        $produto = mysqli_fetch_array($produtos);       
        array_push($carrinho ,$produto['prod_titulo']);
    }
    $resultado = json_encode($carrinho);
    
    return $resultado;
}