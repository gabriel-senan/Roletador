function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return { r, g, b };
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const centerX = width / 2;
const centerY = height / 2;
const radius = width / 2;

let items = document.getElementsByTagName("textarea")[0].value.split("\n");

let step = 360 / items.length;
let colors = items.map(() => randomColor()); // Usando map para criar o array de cores diretamente

draw();

function draw() {
    // Desenha o círculo de fundo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, toRad(0), toRad(360));
    ctx.fillStyle = `rgb(33, 33, 33)`; // Cor fixa para o fundo
    ctx.lineTo(centerX, centerY);
    ctx.fill();

    // Desenha os setores
    let startDeg = 0;
    for (let i = 0; i < items.length; i++) {
        let endDeg = startDeg + step;

        let color = colors[i]; // Pega a cor correspondente
        let colorStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 2, toRad(startDeg), toRad(endDeg));
        let colorStyle2 = `rgb(${color.r - 30}, ${color.g - 30}, ${color.b- 30})`;
        ctx.fillStyle = colorStyle2;
        ctx.lineTo(centerX, centerY);
        ctx.fill()

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 30, toRad(startDeg), toRad(endDeg));
        ctx.fillStyle = colorStyle;
        ctx.lineTo(centerX, centerY);
        ctx.fill();

        startDeg = endDeg; // Atualiza o ângulo inicial para o próximo setor
    }
}
