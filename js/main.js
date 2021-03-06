function getUrlObject(){
    return [ 
        {url:"https://www.comicstore.com.br/", callback: montarPaginaComic, title: "comicstore"},
        {url: "https://www.studiogeek.com.br/", callback: montarPaginasGeekNerd, title: "studiogeek"}, 
        {url: "https://www.imaginarionerd.com.br/", callback: montarPaginasGeekNerd, title: "imaginarionerd"}
    ]
}

window.onload = async function() {
    getUrlObject().forEach(async item => {
        await makeRequest("GET", item.url, item.callback, item.title);
    });
    carrossel();
};

function makeRequest(method, url, montarPagina, nomePag) {
    new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, false);
        xhr.onreadystatechange = async function () {
            if (this.status >= 200 && this.status < 300) {

                montarPagina(xhr.response, nomePag);

                resolve(console.log("OK!"));
            } else {
                reject(console.log(this.status, xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(console.log(this.status, xhr.statusText));
        };
        xhr.send();
    }); 
}

function montarPaginasGeekNerd(pagina, nomePag){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let elementos = documento.querySelectorAll(".listagem-linha .span4 .listagem-item");
    let logo = documento.querySelector(".span3 .logo a");
    let div = document.createElement('div');
    let divPagina = document.querySelector(`.${nomePag}`);

    elementos.forEach(item => {
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        logo.setAttribute("class", "logo");
        divPagina.appendChild(logo);
        divPagina.appendChild(div);
    });
}

function montarPaginaComic(pagina, nomePag){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    

    let elementos = documento.querySelectorAll(".listagem-linha .span3 .listagem-item");
    let logo = documento.querySelector(".span3 .logo a");
    let div = document.createElement('div');
    let divPagina = document.querySelector(`.${nomePag}`);

    elementos.forEach(item => {
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        logo.setAttribute("class", "logo");
        divPagina.appendChild(logo);
        divPagina.appendChild(div);
    });
}

function carrossel(){
    document.querySelectorAll(".carousel");
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}