//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function (e) {
//
//});




var productArray = [];

function showproductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action" ;>
            <div class="row">
                <div >
                    <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="w-100 justify-content-between">
                        <h4 class="mb-1">`+ producto.name +`</h4>
                        <small class="text-muted">` + producto.description + ` </small>
                    </div>

                </div>
            </div>
            
        </div></br>
        </br>
        </br>
       
        `

        document.getElementById("cat-list-container").innerHTML = (htmlContentToAppend);
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productArray = resultObj.data;
           
            showproductsList(productArray);
        }
        hideSpinner()
    });    
});
