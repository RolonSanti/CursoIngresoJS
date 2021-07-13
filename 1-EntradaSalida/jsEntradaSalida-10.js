   /*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe; //importe a ingresar
    let descuento; //descuento que se aplica
    let final; // importe final
    let porcentaje;
     porcentaje = 0.75;
     importe = txtIdImporte.value;
      importe = parseInt(importe);
      final =importe * porcentaje;

      txtIdResultado.value = final;
      

}
