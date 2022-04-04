function perimetro_de_un_cuadrado() {

    var lado;
    var p;
    lado = prompt("introduzca los lados");
    p = 4 * lado;
    alert("el perimetro del cuadrado es " + p);
}

function nombre_completo() {

    var nombres;
    var apellidos;
    nombres = prompt("escriba sus dos nombres");
    apellidos = prompt("escriba sus dos apellidos");
    alert("su nombre completo es " + apellidos + " " + nombres);
}

function edad_de_una_madre_en_el_momento_de_dar_a_luz_a_alguno_de_sus_hijos() {

    var edadmadre;
    var edadhijo;
    var diferencia;
    edadmadre = parseInt(prompt("¿que edad tiene tu madre?"));
    edadhijo = parseInt(prompt("¿que edad tienes tu?"));
    diferencia = edadmadre - edadhijo;
    alert("tu madre te tuvo a los " + diferencia + " años aproximadamente");
}

function hora_fecha_actual() {
    var fecha;
    fecha = Date("esta es la hora y fecha actual");
    alert("la fecha y hora es " + fecha);
}
function descuento_carne() {
    var libras;
    var precio;
    var desc1;
    var desc2;
    var valor_pagar;

    precio = 8700;
    desc1 = precio * 20 / 100;
    desc2 = precio * 10 / 100;
    libras = parseInt(prompt("¿cuantas libras de carne lleva?"));
    if (libras > 4) {
        valor_pagar = libras * precio - desc1;
        alert("el total a pagar es " + valor_pagar);
    } else if (libras > 2 && libras < 4) {
        valor_pagar = libras * precio - desc2;
        alert("el total a pagar es " + valor_pagar);
    } else {
        valor_pagar = precio * libras;
        alert("el total a pagar es " + valor_pagar);
    }
}

function edad_hermanas() {
    var edadhermana1;
    var edadhermana2;
    var edadtuya;

    edadhermana1 = parseInt(prompt("¿que edad tiene tu primera hermana?"));
    edadhermana2 = parseInt(prompt("¿que edad tiene tu segunda hermana?"));
    edadtuya = parseInt(prompt("¿que edad tienes tu?"));

    if (edadhermana1 < edadhermana2 && edadhermana1 < edadtuya) {
        alert("la menor es la hermana 1");
    } else if (edadhermana2 < edadhermana1 && edadhermana2 < edadtuya) {
        alert("la menor es la hermana 2");
    } else {
        alert("la menor eres tu");
    }
}

function numero_negativo() {
    var num1;
    var num2;

    num1 = parseInt(prompt("ingrese el primer numero"));
    num2 = parseInt(prompt("ingrese el segundo numero"));

    if (num1 < 0 && num2 < 0) {
        alert("los dos son negativos");
    } else if (num1 < 0 && num2 > 0) {
        alert("el numero uno es el negativo");
    } else if (num1 > 0 && num2 > 0) {
        alert("los dos son positivos");
    } else {
        alert("el numero dos es el negativo");
    }
}

function area_circulo() {
    var radio;
    var pi;
    var area;

    pi = 3.14516;
    radio = parseInt(prompt("ingrese el radio del circulo"));
    area = pi * (radio * 2);
    alert("el area del circulo es " + area);
}

function radio_circulo() {
    var radio;
    var diametro;

    diametro = parseInt(prompt("digite el diametro del circulo"));
    radio = diametro / 2;
    alert("el radio del circulo es " + radio);

}

function equivalente_numeros_romanos(){
    var num;
    num = parseInt(prompt("ingrese un numero del 1 al 10"));
    
    if (num > 0 && num <2){
        alert ("el numero romano es I");
    }  else if (num > 1 && num < 3) {
        alert ("el numero romano es II");
    }  else if (num > 2 && num < 4) {
        alert ("el numero romano es III");
    }  else if (num > 3 && num < 5) {
        alert ("el numero romano es VI");
    }  else if (num > 4 && num < 6) {
        alert ("el numero romano es V");
    }  else if (num > 5 && num < 7) {
        alert ("el numero romano es VI");
    }  else if (num > 6 && num < 8) {
        alert ("el numero romano es VII");
    }  else if (num > 7 && num < 9) {
        alert ("el numero romano es VIII");
    }  else if (num > 8 && num < 10) {
        alert ("el numero romano es IX");
    } else {
        alert ("el numero romano es X");
    }
}

function numero_menor(){
    var num1;
    var num2;

    num1 = parseInt(prompt("ingrese el primer valor"));
    num2 = parseInt(prompt("ingrese el segundo valor"));

    if(num1 < num2){
        alert("el numero menor es: " + num1);
    } else {
        alert("el numero menor es: "+ num2);
    }
}

function cifras_menores_a_mil(){
var num1;

num1 = parseInt(prompt("introduzca un numero menor a 1000"));
if (num1> 0 && num1< 10){
    alert("el numero tiene una cifras");
}else if(num1>= 10 && num1< 100){
    alert("el numero tiene dos cifras");
}else if (num1>= 100 && num1< 1000){
    alert("el numero tiene tres cifras");
}else{
    alert("el numero tiene mas de tres cifras");
}
}