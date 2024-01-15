function ocultar(caja)
{
    document.getElementById(caja).style.visibility = 'hidden'
}

function mostrar(caja)
{
    document.getElementById(caja).style.visibility = 'visible'
}

function ocultarmostrar(caja)
{
    if(document.getElementById(caja).style.visibility == 'visible')
       document.getElementById(caja).style.visibility = 'hidden';

    else

        document.getElementById(caja).style.visibility == 'visible'
}