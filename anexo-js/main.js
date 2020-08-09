

let nombre = "raquel";
let apellidos = "gonzález";
let altura = 155;

var concatenacion = nombre + " " + apellidos;

// document.write(nombre);
//document.write(apellidos);
//document.write(concatenacion);

var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;

// o usando template string

/*
datos.innerHTML = `
<h1>Hola, soy un título<h1/>
<h2>Mi nombre es: ${nombre} ${apellidos}<h2/>
<h3>Mido: ${altura}cm<h3/>
`;

if (altura >= 190) {
    datos.innerHTML += '<p>Eres una persona alta<p/>'
} else {
    datos.innerHTML += '<p>Eres una persona bajita<p/>'
}

for (var i = 2010; i <= 2020; i++) {
    datos.innerHTML += '<h3>Estamos en el año: <h3/>' + i
}

*/

mostrarNombre = (nombre, apellidos, altura) => {
    datos.innerHTML = `
    <h1>Hola, soy un título<h1/>
    <h2>Mi nombre es: ${nombre} ${apellidos}<h2/>
    <h3>Mido: ${altura}cm<h3/>
    `;
}


mostrarNombre("Ana", "Mendez", 185);


var nombres = ["Victor", "Antonio", "Joaquin"];

document.write("<h2>Listado de nombres<h2/>")

// for (i = 0; i < nombres.length; i++) {
//     document.write(nombres[i] + " <br/>");
// }

nombres.forEach((nombre) => {
    document.write(nombre + " <br/>");
})

