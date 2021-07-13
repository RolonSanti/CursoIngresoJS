/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = document.getElementById('txtIdNumeroUno').value;//"5"
	numero2 = document.getElementById('txtIdNumeroDos').value;//"123"

    numero1 = parseInt(numero1);// parseo(convertir un tipo cadena a un tipo numerico)
    numero2 = parseInt(numero2);
    resultado = numero1 + numero2;

    alert("La suma de los numeros es: " + resultado);
}







// txtIdNumeroUno
// txtIdNumeroDos