var texto = document.getElementById("objeto")
var botonsubmit = document.getElementById("submit")
var queryString = "";
var urlParams;
var listaCosas = [];

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    añadir();
  });

function añadir() {
    if(texto.value === ""){
        console.log("huh");
        return;
    }

    var div = document.createElement("div");
    var titulo = document.createElement("h1");
    var but1 = document.createElement("button");
    var but2 = document.createElement("button");
    var num = document.createElement("h2");

    titulo.innerText = texto.value;
    but1.innerText = "+";
    but2.innerText = "-";
    num.innerText = "1";

    but1.setAttribute("orden", listaCosas.length)
    but1.setAttribute("onclick", "sumar(this)")
    but2.setAttribute("orden", listaCosas.length)
    but2.setAttribute("onclick", "restar(this)")
    div.setAttribute("id", listaCosas.length)
    num.setAttribute("id", `${listaCosas.length}-num`)  
    titulo.setAttribute("id", `${listaCosas.length}-name`)  

    div.appendChild(titulo);
    div.appendChild(num);
    div.appendChild(but1);
    div.appendChild(but2);

    document.getElementById("orders-div").appendChild(div);

    texto.value = "";

    listaCosas.push(1);
}

function sumar(elemento){
    var orden = elemento.getAttribute("orden")
    var num = document.getElementById(`${orden}-num`);
    listaCosas[orden]++;
    num.innerText = listaCosas[orden];
}

function restar(elemento){
    var orden = elemento.getAttribute("orden")
    var num = document.getElementById(`${orden}-num`);
    
    listaCosas[orden]--;
    num.innerText = listaCosas[orden];

    if(listaCosas[orden] === 0){
        document.getElementById(`${orden}`).remove();
    }
}

$('document').ready(function(){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    for (const [key, value] of urlParams.entries()) {
        var div = document.createElement("div");
        var titulo = document.createElement("h1");
        var but1 = document.createElement("button");
        var but2 = document.createElement("button");
        var num = document.createElement("h2");

        titulo.innerText = key;
        but1.innerText = "+";
        but2.innerText = "-";
        num.innerText = value;

        but1.setAttribute("orden", listaCosas.length)
        but1.setAttribute("onclick", "sumar(this)")
        but2.setAttribute("orden", listaCosas.length)
        but2.setAttribute("onclick", "restar(this)")
        div.setAttribute("id", listaCosas.length)
        num.setAttribute("id", `${listaCosas.length}-num`)
        titulo.setAttribute("id", `${listaCosas.length}-name`)

        div.appendChild(titulo);
        div.appendChild(num);
        div.appendChild(but1);
        div.appendChild(but2);

        document.getElementById("orders-div").appendChild(div);

        texto.value = "";

        listaCosas.push(Number(value));
    }
});

async function copyLink(){
    var link = window.location.href +  "?";
    for(var i = 0; i < listaCosas.length; i++){
        if(listaCosas[i] === 0){
            continue;
        }
        link += document.getElementById(`${i}-name`).innerText + "=" + document.getElementById(`${i}-num`).innerText + "&";
    }

    navigator.clipboard.writeText(link);

    document.getElementById("alert").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("alert").classList.add("hidden")
    }, 2000)
}

function info(){
    
}