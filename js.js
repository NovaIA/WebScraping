function montarPaginaNerd(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha .span4 a.produto-sobrepor");
    aaa.forEach(item => {
        console.log(item.title)
    });
    // var tempObj = [];
    // for(let i =0; i<aaa.length; i++){
    //     tempObj[i] = {info:""};
    //     tempObj[i].info = aaa[i].children[0].id;
    //     console.log(tempObj[i]);
    // }
    // .forEach(div => {
    //     var bbb = div.children;
    //     console.log('Nerd ' + bbb);
    // //     // Array.from(aaa).forEach(x => {
    // //     //     var noticia = x.children;
    // //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    // //     // });
    // //     // var div2 = document.createElement("div");
    // //     // div2.innerHTML = p;
    // //     // document.body.appendChild(div2);
    // });
}

function montarPaginaGeek(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha");
    console.log(aaa);
    // .forEach(div => {
    //     var bbb = div.children;
    //     console.log('geek ' + bbb);
    // //     // Array.from(aaa).forEach(x => {
    // //     //     var noticia = x.children;
    // //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    // //     // });
    // //     // var div2 = document.createElement("div");
    // //     // div2.innerHTML = p;
    // //     // document.body.appendChild(div2);
    // });
}

function montarPaginaComic(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha ");
    console.log(aaa);
    // .forEach(div => {
    //     var bbb = div.children;
    //     console.log('comic ' +bbb);
    // //     // Array.from(aaa).forEach(x => {
    // //     //     var noticia = x.children;
    // //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    // //     // });
    // //     // var div2 = document.createElement("div");
    // //     // div2.innerHTML = p;
    // //     // document.body.appendChild(div2);
    // });
}

function ImaginarioReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.imaginarionerd.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaNerd(this.responseText);
            console.log("OK imaginario");
        }
    };
    
    xhttp.send();
}

function StudioGeekReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.studiogeek.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaGeek(this.responseText);
            console.log("OK studio");
        }
    };
    
    xhttp.send();
}

function ComicStoreReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.comicstore.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaComic(this.responseText);
            console.log("OK comic");
        }
    };
    
    xhttp.send();
}