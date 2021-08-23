//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){

//});

function verificar (){

    let  dato = document.getElementById('usuario');
    let  pasw = document.getElementById('pass')
    //let usuario= {};
    
    if((dato.value).trim() === '' || (pasw.value.trim()) === ''){

        alert("Datos vacíos");
    } else{

        location.href="index.html";
        usuario.nombre= dato.value;
        usuario.estado= "Conectado";

        localStorage.setItem('usuario',JSON.stringify(usuario));
       sessionStorage.setItem('usuario',JSON.stringify(usuario));

    }

}



