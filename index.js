
var container = document.getElementById("datafetched");
var table = document.getElementById("tabla");
var cantidadregistros= document.getElementById("cantidadregistros")

function buscar(){
    LimpiarTabla();
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => EscribirTabla(json, cantidadregistros.value));  
}
function EscribirTabla(datos, cantidad){
    var columnas = [];
    var nfila = table.insertRow();
    var IDcelda = nfila.insertCell();
    var imgcelda =  nfila.insertCell();
    var Ttitulocelda = nfila.insertCell();
    var titulos =["Id", "Imagen", "Titulo"]
    for(var i =0;i<3;i++){
    columnas.push(nfila.insertCell());
    columnas[i].innerHTML= `<th><h1>${titulos[i]}</h1></th>`;
    }
    for(i = 0;i < cantidad;i++){
        
        var nfila = table.insertRow();
        var titulos =["Id", "Imagen", "Titulo"]
        var IDcelda = nfila.insertCell();
        IDcelda.innerHTML = `<td><p>${datos[i].id}</p></td>`;
        var imgcelda =  nfila.insertCell();
        imgcelda.innerHTML = ` <td><img src = ${datos[i].url} width="50" height = "50"></td>`;
        var Ttitulocelda = nfila.insertCell();
        Ttitulocelda.innerHTML = `<td><p><b>${datos[i].title}</b></p></td>`;
    }
}
function LimpiarTabla(){
    tabla.innerHTML = "";
}
