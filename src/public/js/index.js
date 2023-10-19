"use strict"
const cromatica = [
    'do',
    'do#',
    're',
    're#',
    'mi',
    'fa',
    'fa#',
    'sol',
    'sol#',
    'la',
    'la#',
    'si'
]
//console.log(cromatica)
const cromatica_e_enhamornica = [

    [['Do', 'C'], ['Rébb', 'Dbb']],
    [['Do#', 'C'], ['Réb', 'Db']],
    [['Ré', 'D'], ['Mibb', 'Ebb']],
    [['Ré#', 'D#'], ['Mib', 'Eb']],
    [['Mi', 'E'], ['Fáb', 'Fb']],
    [['Fá', 'F'], ['Solbb', 'Gbb']],
    [['fa#', 'Solb'], ['Solb', 'Gb']],
    [['Sol', 'G'], ['Labb', 'Abb']],
    [['Sol#', 'G#'], ['Lab', 'Ab']],
    [['La', 'A'], ['Sibb', 'Bbb']],
    [['La#', 'A#'], ['Sib', 'Bb']],
    [['Si', 'B'], ['Dob', 'Cb']]

]

//T T sT T T T sT
const intervaloMaior = [0, 2, 4, 5, 7, 9, 11]
//T sT T T sT T T

const intervaloRelativoMenorN = [9, 11, 0, 2, 4, 5, 7]

//T sT T T sT T T
const intervaloMenorN = [0, 2, 3, 5, 7, 9, 11]

//T sT T T sT T+sT sT
const intervaloMenorH = [0, 2, 3, 5, 7, 10, 11]

//1, 2, 3, 4, 5,  6, 7 


//T sT T T T T sT
const intervaloMenorM = [0, 2, 3, 5, 7, 9, 10]

const intervalos = {

    //T T sT T T T sT
    intervaloMaior: [0, 2, 4, 5, 7, 9, 11],
    //T sT T T sT T T

    intervaloRelativoMenorN: [9, 11, 0, 2, 4, 5, 7],

    //T sT T T sT T T
    intervaloMenorN: [0, 2, 3, 5, 7, 9, 11],

    //T sT T T sT T+sT sT
    intervaloMenorH: [0, 2, 3, 5, 7, 10, 11],

    //1, 2, 3, 4, 5,  6, 7 



    //T sT T T T T sT
    intervaloMenorM: [0, 2, 3, 5, 7, 9, 10]
}

const escala_cromatica = (tom, escala) => {


    let nota = escala.indexOf(tom)

    let a = escala.slice(nota)
    let b = escala.slice(0, nota)



    return a.concat(b)


}


const escala_cromatica_enhamornica = (tom, crom, escala) => {


    nota = escala[crom.indexOf('Mi')]
    //console.log(nota)
    a = escala.slice(nota)
    b = escala.slice(0, nota)



    return a.concat(b)


}


const escala = (intervalo, tom) => {
    let escala = []

    for (let i = 0; i < intervalo.length; i++) {


        escala.push(escala_cromatica(tom, cromatica)[intervalo[i]])



    }

    return escala.concat(escala)
}




const campo_h = []

const escala_X = escala(intervaloMaior, 'do')


//localStorage.removeItem("escala_X")

console.log(escala_X, 6)


const acordes2 = (intervaloA, intervaloE, tom) => {

    const acorde = []

    for (let i = 0; i < intervaloA.length; i++) {


        acorde.push(escala(intervaloE, tom)[intervaloA[i]])



    }
    return acorde


}

//console.log([0, 2, 4,6])//intervalo maior

console.log(acordes2([0, 2, 4, 6], intervaloMaior, 'do'), '🤪', 2222)
//

const escalas_X = []


for (let i = 0; i < 7; i++) {

    let nota = escala_X.indexOf(escala_X[i])
    let a = escala_X.slice(nota)
    let b = escala_X.slice(0, nota)

    escalas_X.push(a.concat(b))

}

//
console.log(escalas_X, "❤️")

const intervalo_acordes = [0, 2, 4, 6]
for (let i = 0; i < intervalo_acordes.length; i++) {

    //console.log(escalas_X[0][intervalo_acordes[i]])
}

const acordeH = []

const escalaH = escalas_X[1]

const acordesH = (intervalo, escala) => {

    const acordeH = []

    for (let i = 0; i < intervalo.length; i++) {

        acordeH.push(escala[intervalo[i]])
    }

    return acordeH
}


console.log(acordesH(intervalo_acordes, escalaH), 5)

const campoH_do = []
for (let i = 0; i < escalas_X.length; i++) {
    campoH_do.push(acordesH(intervalo_acordes, escalas_X[i]))
}

console.log(campoH_do, '⚙️')


function ch(tom, escala_c) {

    campoH_do = []
    for (let i = 0; i < escalas_X.length; i++) {
        campoH_do.push(acordesH(intervalo_acordes, escalas_X[i]))
    }

}


function getAcorde2(notas) {
    const notaToNome = {
        0: 'C',
        1: 'C#',
        2: 'D',
        3: 'D#',
        4: 'E',
        5: 'F',
        6: 'F#',
        7: 'G',
        8: 'G#',
        9: 'A',
        10: 'A#',
        11: 'B',
        12: 'C',
        13: 'C#',
        14: 'D',
        15: 'D#',
        16: 'E',
        17: 'F',
        18: 'F#',
        19: 'G',
        20: 'G#',
        21: 'A',
    };

    const nomeToTensao = {
        maj: [0, 4, 7],
        "6b": [0, 4, 7, 8],
        "9": [0, 4, 7, 14],
        "11": [0, 4, 7, 17],
        "7M11": [0, 4, 7, 11, 17],
        "13": [0, 4, 7, 21],
        "6": [0, 4, 7, 9],
        m: [0, 3, 7],
        aug: [0, 4, 8],
        7: [0, 4, 7, 10],
        m7: [0, 3, 7, 10],
        maj7: [0, 4, 7, 11],
        "maj7(9 11, 13)": [0, 4, 7, 11, 14, 17, 21],
        dim: [0, 3, 6],
        sus2: [0, 2, 7],
        sus4: [0, 5, 7],
    };

    let nomeAcorde = '';
    let tensaoAcorde = [];

    // Verifica a nota base do acorde
    const primeiraNota = notas[0];
    nomeAcorde = notaToNome[primeiraNota];

    // Calcula a tensão do acorde a partir da nota base
    for (let i = 0; i < notas.length; i++) {
        const tensao = (notas[i] - primeiraNota + 22) % 22;
        tensaoAcorde.push(tensao);
    }

    // Verifica qual o tipo de acorde com base na tensão
    for (const [nome, tensao] of Object.entries(nomeToTensao)) {
        if (JSON.stringify(tensao.sort()) === JSON.stringify(tensaoAcorde.sort())) {
            nomeAcorde += nome;
            break;
        }
    }

    return nomeAcorde;
}
function getAcorde(notas) {
    const notaToNome = [
        'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
    ];

    const nomeToTensao = new Map([
        ['maj', [0, 4, 7]],
        ['6b', [0, 4, 7, 8]],
        ['9', [0, 4, 7, 14]],
        ['11', [0, 4, 7, 17]],
        ['7M11', [0, 4, 7, 11, 17]],
        ['13', [0, 4, 7, 21]],
        ['6', [0, 4, 7, 9]],
        ['m', [0, 3, 7]],
        ['aug', [0, 4, 8]],
        ['7', [0, 4, 7, 10]],
        ['m7', [0, 3, 7, 10]],
        ['maj7', [0, 4, 7, 11]],
        ['maj7(9 11, 13)', [0, 4, 7, 11, 14, 17, 21]],
        ['dim', [0, 3, 6]],
        ['sus2', [0, 2, 7]],
        ['sus4', [0, 5, 7]],
    ]);

    let nomeAcorde = '';
    let tensaoAcorde = [];

    // Verifica a nota base do acorde
    const primeiraNota = notas[0];
    nomeAcorde = notaToNome[primeiraNota];

    // Calcula a tensão do acorde a partir da nota base
    for (let i = 0; i < notas.length; i++) {
        const tensao = (notas[i] - primeiraNota + 12) % 12;
        tensaoAcorde.push(tensao);
    }

    // Verifica qual o tipo de acorde com base na tensão
    for (const [nome, tensao] of nomeToTensao) {
        if (arraysSaoIguais(tensao, tensaoAcorde)) {
            nomeAcorde += nome;
            break;
        }
    }

    return nomeAcorde;
}

function arraysSaoIguais(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}


function test() {
    const notas = [0, 4, 7, 21];
    const resultado = getAcorde(notas);
    console.log(resultado); // deve imprimir "Cmaj"
}
function test2(_notas) {
    let notas = _notas.map((nota, index) => {
        if (index > 0) {
            return cromatica.indexOf(nota) + 12
        }
        return cromatica.indexOf(nota)
    });

    const resultado = getAcorde(notas);
    console.log({
        resultado,
        notas
    }); // deve imprimir "Cmaj"
    return resultado
}



cromatica.map(i => {
    const option = document.createElement("option")
    option.textContent = i
    return option
}).map(i => document.querySelector("#tons").append(i))
Object.keys(intervalos).map(i => {
    const option = document.createElement("option")
    option.textContent = i
    return option
}).map(i => document.querySelector("#intervalos").append(i))
//console.log(options)


document.forms[0].children[2].onclick = e => {
    e.preventDefault()
    //console.log(e)
    let div = document.createElement("div")
    div.style = "text-align:center;"
    let a = acordes2([0, 2, 4,
        6,
        //8, //7
        //10, //9
        //  12  //11
    ], intervalos[e.target.parentNode.children[0].value], e.target.parentNode.children[1].value)
    console.log({
        a,

    })
    test2(a)
    createTable(a.map((i, x) => {
        let _a = {}
        _a['notas'] = i
        _a['#'] = x * 2 + 1
        if (x === 0) _a[`${test2(a)}`] = ""
        return _a
    }))



    //div.textContent=a.join(' - ')

    document.body.insertAdjacentElement("afterend", div, document.forms[0])

    console.log(e.target.value)
    console.log(e.target.value)

}


function createTable(objectArray, fields, fieldTitles) {
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');

    for (let p in objectArray[0]) {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(p));
        thr.appendChild(th);

    }

    thead.appendChild(thr);
    tbl.appendChild(thead);

    let tbdy = document.createElement('tbody');
    let tr = document.createElement('tr');
    objectArray.forEach((object) => {
        let n = 0;
        let tr = document.createElement('tr');
        for (let p in objectArray[0]) {
            let td = document.createElement('td');
            td.setAttribute("style", "border: 1px solid green");
            td.appendChild(document.createTextNode(object[p]));
            tr.appendChild(td);
            n++;
        };
        tbdy.appendChild(tr);
    });
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    return tbl;
}
