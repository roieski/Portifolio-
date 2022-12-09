const inputTelefone = document.querySelector("#telefone");
console.log(inputTelefone);

inputTelefone.addEventListener("keypress", function(e){

    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    console.log(keyCode);

    if(keyCode > 47 && keyCode < 58) {
    }else{
         alert(" Este campo deve conter apenas números!")
        e.preventDefault();
    }

});

const inputNome = document.querySelector("#nomesobrenome");

inputNome.addEventListener("keypress", function(e){

    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58) {
        e.preventDefault();
       alert("Este campo deve conter apenas letras!")
    }

});
