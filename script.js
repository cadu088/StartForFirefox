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
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        pesquisar();
    }
}, false);

//modo noturno
// const options = {
//     bottom: '32px', // default: '32px'
//     right: '32px', // default: '32px'
//     left: 'unset', // default: 'unset'
//     time: '0.3s', // default: '0.3s'
//     mixColor: '#fff', // default: '#fff'
//     backgroundColor: '#fff', // default: '#fff'
//     buttonColorDark: 'rgba(68, 0, 255, 0.2)', // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: true, // default: true,
//     label: '', // default: ''
//     autoMatchOsTheme: true, // default: true
// }

// const darkmode = new Darkmode(options);

// darkmode.showWidget();

//data texto 




function relogio() {
    const local = window.document.getElementById('dataText');
    const texto = window.document.getElementById('DataTexto');
    const emoji = window.document.getElementById('emojin')
    const hora = new Date();
    const atual = hora.getHours();
    if (atual >= 12 && atual < 18) {
        texto.innerText = 'Boa tarde!'
        emoji.innerText = '🎑'
    } else if (atual >= 18) {
        texto.innerText = 'Boa noite!'
        emoji.innerText = '​🌙'
    } else if (atual >= 0 && atual < 5) {
        texto.innerText = 'Boa noite!'
        emoji.innerText = '🌆'
    } else {
        texto.innerText = 'Bom dia!'
        emoji.innerText = '​☀'
    }
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var horas = data.getHours();
    var min = data.getMinutes();
    var str_data = dia + '/' + (mes + 1);
    var str_hora = horas + ':' + min;

    var dias = new Array(
        'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
    );
    dataTime.innerText = ('Hoje é ' + dias[data.getDay()] + ' dia ' + str_data + ' às ' + str_hora);
    setTimeout("relogio()", 1000);
}