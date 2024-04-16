const buttons = document.querySelectorAll('.table button.btn-danger');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('name');
    });
});

xml("email=" + encodeURIComponent("willian@cr2.com") + "&nome=" + encodeURIComponent("willian") + "&senha=" + encodeURIComponent("123") + "&cargo=" + encodeURIComponent("1"));
xml("prod_titulo=" + encodeURIComponent("willian@cr2.com") + "&prod_descricao=" + encodeURIComponent("willian") + "&prod_quantidade=" + encodeURIComponent("123") + "&prod_preco=" + encodeURIComponent("1"));

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