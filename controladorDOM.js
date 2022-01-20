
//rutina para detectar el clic sobre un boton
let botonCambio=document.getElementById("boton")
botonCambio.addEventListener("click",cambiarArtista)

let bandera=true


function cambiarArtista(){
    bandera=!bandera
    if(bandera==true){ //condicional para evaluar la bandera
        console.log("la bandera es positiva");
        let etiquetaImagen=document.getElementById("imagen1")
        etiquetaImagen.src="img/foto2.jpg"
        let etiquetaVideo=document.getElementById("video1")
        etiquetaVideo.src="video/video2.mp4"
        let etiquetaFechaConcierto=document.getElementById("fechaConcierto")
        etiquetaFechaConcierto.textContent="Se presentan en semana santa"
    }else{
        console.log("la bandera es falsa");
        let etiquetaImagen=document.getElementById("imagen1")
        etiquetaImagen.src="img/foto1.jpeg"
        let etiquetaVideo=document.getElementById("video1")
        etiquetaVideo.src="video/video1.mp4"
        let etiquetaFechaConcierto=document.getElementById("fechaConcierto")
        etiquetaFechaConcierto.textContent="Se presentan en marzo"
    }
        

    //se crea referencia a la foto


//se crea referencia al video


//se crea referencia a la fecha del concierto

    
}
