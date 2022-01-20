let producto1="aguardiente tapa roja"
let producto2="aguardiente tapa azul"
let producto3="aguardiente tapa verde"
let producto4="ron viejo de caldas"
let producto5="ron medellin 8 años"
let producto6="tequila don julio"
let producto7="vodka absolute" 
let producto8="whisky old parr"
let producto9="soda"
let producto10="cerveza corona"
let producto11="cerveza pilsen"
let producto12="cerveza aguila"
let producto13="red bull"
let producto14="coca cola"
let producto15="picada"
let producto16="arepa de chocolo"
let producto17="margarita"
let producto18="mojito"
let producto19="granizados"
let producto20="four loko"
let producto21="vino rose"

let arregloProductos=["aguardiente tapa roja", "aguardiente tapa azul", "aguardiente tapa verde", "ron viejo de caldas", "ron medellin 8 años"]

let arregloProductosPOO=new Array("aguardiente tapa roja", "aguardiente tapa azul", "aguardiente tapa verde", "ron viejo de caldas", "ron medellin 8 años")

let precioProducto=[145000,120000,95000,155000,100000]

console.log(arregloProductos[1])
console.log(arregloProductosPOO)
console.log(precioProducto)

//filtrar un arreglo

let filtrado=precioProducto.filter(function(precio){
    return precio<=100000   
})
console.log(filtrado)

let filtrado1=precioProducto.filter(function(precio){
    return precio==155000  
})
console.log(filtrado1)

let filtrado2=precioProducto.filter(function(precio){
    return precio>105000  
})
console.log(filtrado2)

let filtrado3=precioProducto.filter(function(precio){
    return precio==130000  
})
console.log(filtrado3)

let filtrado4=precioProducto.filter(function(precio){
    return precio==70000  
})
console.log(filtrado4)

//se le debe aplicar el iva de 19% a todos los precios

let datosMapeados=precioProducto.map(function(precio){
    return(precio*1.19)
})

console.log(precioProducto)
console.log(datosMapeados)

let datosMapeados2=arregloProductos.map(function(producto){
    return("1/2 botella: " + producto)
})

console.log(datosMapeados2)

//recorrer un arreglo

arregloProductos.forEach(function(producto) {
    console.log(producto)
});