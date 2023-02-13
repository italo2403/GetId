

function Somar(){
    let nome = document.getElementById("nome").value;
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let resultado = document.getElementById("resultado").innerHTML="O Resultado é"+" "+(num1+num2)+" " + nome;
}