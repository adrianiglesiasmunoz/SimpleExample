function Introduce(){
	var Escribe = prompt("Introduce un número del 1 al 10");
			if(Escribe < 5){
				alert("Has introducido el número " + Escribe + " y ese número es menor que 5")
			}
			else{
				alert("Has introducido el número " + Escribe + " y ese número es mayor que 5")
			}
			
		}

		document.getElementById('miBoton').onclick = Introduce;


