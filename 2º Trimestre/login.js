function login()
{
    var usuario = document.getElementById("user").value;
    var password = document.getElementById("password").value;


    if(usuario == "" || password== "")
    {

        alert  ("Introduzca un usuario y contraseña")

    }
    else
    {
        alert("Bienvenido usuario "+usuario+" con la contraseña "+password+".")
    }

    


}