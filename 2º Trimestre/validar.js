function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validarContra()){
        document.getElementById("campo4").innerHTML = "Contraseña no válida";        
        estanCorrectos = false;
    }
    if (!validarDni()){
        document.getElementById("campo6").innerHTML = "Dni no válida";        
        estanCorrectos = false;
    }
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
* https://trellat.es/funcion-para-validar-dni-o-nie-en-javascript/ 
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 
function validarContra(){
    var vali;
    var contraField1 = document.getElementById('password1').value;
    var contraField2 = document.getElementById('password2').value;
    var Lcon = contraField1.length;
    if(contraField1 != contraField2){
        vali=false;
    }
    else if(Lcon < 8){
        vali=false;
    }
    else{
        vali=true;
    }
    return vali;
}
function validarDni(){
    var letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var cadena= document.getElementById('dni').value;
    var numero = cadena.substring(0,8);
    var letraUsuario = cadena[8];
    var letraReal = letra[numero % 23];
    var dniValido = true;
    if(letraUsuario != letraReal){
        dniValido = false;

    }
    else if (Ldni <= 8 || Ldni >=10){
        dniValido = false;
    }
    else{
        dniValido = true;
    }


    return dniValido;

}
