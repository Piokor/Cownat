// JavaScript source code
var x = 67;
var y = 132;
var speed = 100;

var tabela = new Array(x);

var start = 0;

var bloki = document.getElementById("bloki");

for (var i = 0; i < x; i++) {
    tabela[i] = new Array(y);
}

for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
        tabela[i][j] = 0;
    }
}

function stworzLinie() {
    for (var i = 1; i < x - 1; i++) {
        for (var j = 1; j < y - 1; j++) {
            var blok = document.createElement("DIV");
            blok.className = "blok";
            blok.setAttribute("id", i + "," + j );
            blok.setAttribute("onclick", "zmien(" + i + "," + j + ")");
            document.getElementById("bloki").appendChild(blok);    
        }
        var nowaLinia = document.createElement("DIV");
        nowaLinia.style.clear = "both";
        document.getElementById("bloki").appendChild(nowaLinia);
    }
}



function zmien(X, Y) {
    tenBlok = document.getElementById(X + "," + Y);
    if (tabela[X][Y] == 0) {
        tenBlok.setAttribute("style", "background-color: #000;");
        tabela[X][Y] = 1;
    }
    else {
        tenBlok.setAttribute("style", "background-color: #eee;");
        tabela[X][Y] = 0;
    }
}

function czysc() {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            if (tabela[i][j] == 1) {
                tenBlok = document.getElementById(i + "," + j);
                tenBlok.setAttribute("style", "background-color: #eee;");
                tabela[i][j] = 0;                
            }
        }
    }
    start = 0;
}

function sasiedzi(X, Y) {
    var ilosc = 0;
    if (tabela[X][Y]) {
        if (tabela[X - 1][Y - 1] == 1)
            ilosc++;
        if (tabela[X][Y - 1] == 1)
            ilosc++;
        if (tabela[X - 1][Y] == 1)
            ilosc++;
        if (tabela[X + 1][Y - 1] == 1)
            ilosc++;
        if (tabela[X - 1][Y + 1] == 1)
            ilosc++;
        if (tabela[X + 1][Y + 1] == 1)
            ilosc++;
        if (tabela[X][Y + 1] == 1)
            ilosc++;
        if (tabela[X + 1][Y] == 1)
            ilosc++;
        if (ilosc == 2 || ilosc == 3)
            return true;
        else
            return false;
    }
    if (!(tabela[X][Y])) {
        if (tabela[X - 1][Y - 1] == 1)
            ilosc++;
        if (tabela[X][Y - 1] == 1)
            ilosc++;
        if (tabela[X - 1][Y] == 1)
            ilosc++;
        if (tabela[X + 1][Y - 1] == 1)
            ilosc++;
        if (tabela[X - 1][Y + 1] == 1)
            ilosc++;
        if (tabela[X + 1][Y + 1] == 1)
            ilosc++;
        if (tabela[X][Y + 1] == 1)
            ilosc++;
        if (tabela[X + 1][Y] == 1)
            ilosc++;
        if (ilosc == 3)
            return true;
        else
            return false;
    }
}

function startGry() {
    start = 1;
    gra();
}

function stop() {
    start = 0;
}

function gra() {
    if (start) {
        var tabela2 = new Array(x);
        for (var i = 0; i < x; i++) {
            tabela2[i] = new Array(y);
        }

        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                tabela2[i][j] = 0;
            }
        }
    

        for (var i = 1; i < (x - 1); i++) {
            for (var j = 1; j < (y - 1); j++) {
                if (sasiedzi(i, j))
                    tabela2[i][j] = 1;
                else
                    tabela2[i][j] = 0;
            }
        }

        for (var i = 1; i < x - 1; i++) {
            for (var j = 1; j < y - 1; j++) {
                tenBlok = document.getElementById(i + "," + j);
                tabela[i][j] = tabela2[i][j];
                if (tabela[i][j] == 0) {
                    tenBlok.setAttribute("style", "background-color: #eee;");
                }
                if (tabela[i][j] == 1) {
                    tenBlok.setAttribute("style", "background-color: #000;");
                }
            }
        }
    
            setTimeout(gra, speed)
     
    } 
}


window.onload = stworzLinie;