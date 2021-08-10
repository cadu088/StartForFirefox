function pesquisar() {

    var cod = document.getElementById("pesquisaS").value;
    var mode = document.getElementById("modoDePesquisa").value;
    var pesquisaEspaco = cod.trim();
    var mod = mode.trim();
    var pesquisaTratada = pesquisaEspaco.split(" ").join("+");


    if (mod != false) {
        if (mod === "G" || mod === "g") {
            var site = "https://www.google.com/search?q=" + pesquisaTratada;
            return window.location.href = site;
        } else if (mod === "Y" || mod === "y") {
            var site = "https://www.youtube.com/results?search_query=" + pesquisaTratada;
            return window.location.href = site;
        } else if (mod === "W" || mod === "w") {
            var pesquisaTratada = pesquisaEspaco.split("+").join("_");
            var site = "https://pt.wikipedia.org/wiki/" + pesquisaTratada;
            return window.location.href = site;
        } else if (mod === "G1" || mod === "g1") {
            var pesquisaTratada = pesquisaEspaco.split("+").join("_");
            var site = "https://g1.globo.com/busca/?q=" + pesquisaTratada + "&page=1";
            return window.location.href = site;
        } else if (mod === "F" || mod === "f") {
            var pesquisaTratada = pesquisaEspaco.split("+").join(" ");
            var site = "https://www.facebook.com/search/top?q=" + pesquisaTratada;
            return window.location.href = site;
        } else if (mod === "L" || mod === "l") {
            var pesquisaTratada = pesquisaEspaco.split("+").join(" ");
            var site = "https://www.linkedin.com/search/results/all/?keywords=" + pesquisaTratada + "&origin=GLOBAL_SEARCH_HEADER";
            return window.location.href = site;
        } else {
            return alert("Até o momento esse modo não foi adicionado :( Por favor contate o desenvolvedor para que a adição seja feita :)")
        }
    } else {
        var site = "https://www.google.com/search?q=" + pesquisaTratada;
        return window.location.href = site;
    }



}