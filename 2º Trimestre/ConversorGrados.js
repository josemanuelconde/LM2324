function conversion(temperatura)
{
    let cantidad =document.getElementById('cantidad').value;
    let resultado = 0;

    if(temperatura == 'Celsius')
    {
        resultado = cantidad - 32 * 5 / 9;

        document.getElementById('resultado').innerHTML = resultado + "ºC";

    }
    else
    {
        resultado = cantidad * 9 / 5 + 32;

        document.getElementById('resultado').innerHTML = resultado + "ºF";
    }
}