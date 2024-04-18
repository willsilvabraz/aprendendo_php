const buttons = document.querySelectorAll('.table button.btn-danger');




var email = "email=" + encodeURIComponent("willian@cr2.com");
var nome = "nome=" + encodeURIComponent("willian");
var senha = "senha=" + encodeURIComponent("123");
var cargo = "cargo=" + encodeURIComponent("1");

var prod_titulo = "prod_titulo=" + encodeURIComponent("carne");
var prod_descricao = "prod_descricao=" + encodeURIComponent("boy");
var prod_quantidade = "prod_quantidade=" + encodeURIComponent("20");
var prod_preco = "prod_preco=" + encodeURIComponent("50");

var ler_estoque = "ler_estoque=" + encodeURIComponent("1");

var cad_funcionario = `${email}&${nome}&${senha}&${cargo}`; 
var cad_produto = `${prod_titulo}&${prod_descricao}&${prod_quantidade}&${prod_preco}`; 

xml(cad_funcionario);
xml(cad_produto);
var a = xml(ler_estoque);

const objA = {
    nome: a
};




var nomesArray = a.split(',');

var bodyElement = document.getElementsByTagName('body')

console.log(`valor de a: ${nomesArray}`);

console.log(xml(ler_estoque));

function xml($parametro){
    var xml = new XMLHttpRequest();
    xml.open("POST", "crud.php", true);
    xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xml.onreadystatechange = function(){
        if(xml.readyState === 4 && xml.status === 200){
            console.log(xml.responseText);
        }
    };
    xml.send($parametro);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('name');
    });
});
<<<<<<< HEAD

/*
    document.write('<a>');
    for(var i = 0; i < ){
    
        document.write('');
    }
    document.write('</a>');
    
    
    */
=======
>>>>>>> 374881a42182689533f905b6156cbb2fc7385a8c
