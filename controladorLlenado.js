
let arregloProductos=["aguardiente tapa roja", "aguardiente tapa azul", "aguardiente tapa verde", "ron viejo de caldas", "ron medellin 8 años","tequila don julio","vodka absolute","whisky old parr","soda","cerveza corona","cerveza pilsen","cerveza aguila","red bull","coca cola","picada","arepa de chocolo","margarita","mojito","granizados","four loko","vino rose"]

//se necesita esa referencia a la lista del documento html

let etiquetaLista=document.getElementById("lista")

arregloProductos.forEach(function(producto) {
    
    //trversing crear etiquetas html desde js
    
    let elementoLista=document.createElement("li")

    //Asociar el textode cada producto al LI que cree
    elementoLista.textContent=producto

    //Asociar las etiquetas creadas

    etiquetaLista.appendChild(elementoLista)
});

console.log(etiquetaLista)
console.log(arregloProductos)

//creemos objetos de datos en JS

let objetosPersonas={
    nombre: "Jovany",
    apellido: "Lopez",
    edad: 34,
    telefono: "3015053204",
    profesion: "ingenierio informatico",
    equipo: "Medellin",
    comidasFavoritas: ["fijoles","chicharron","guacamole"]
} 
console.log(objetosPersonas)
console.log(objetosPersonas.comidasFavoritas)
