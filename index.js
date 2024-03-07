
let dia, turno;
let num, gast, gast1, tot, tot2, tot3, tot4;
let imp, imp2, porc, porc1, porc2;

// tiempo de la llamada 
num = parseFloat(prompt("¿Cuánto fue el tiempo de su llamada en minutos?"));

// porcentajes
porc = 3;
porc1 = 15;
porc2 = 10;

// gasto
gast = num * 60;
gast1 = gast * 30;
imp = (gast1 / 100) * porc;
tot = gast1 + imp;

// Dia
dia = prompt("¿Qué día fue su llamada?");

// variable
if (dia.toLowerCase() === "domingo") {
    tot2 = (gast1 / 100) * porc + gast1;
    console.log("Se le cobrará un 3% por ser domingo.");
    console.log(`El saldo que debe pagar es de ${tot2} pesos por su llamada.`);
} else {
    console.log("Pasaremos a decirle qué impuesto se le cobrará a continuación.");
    console.log("¿Su llamada fue en turno mañana o turno tarde?");
    turno = prompt("Ingrese 'mañana' o 'tarde':").toLowerCase();

    // costo
    switch (turno) {
        case "mañana":
            tot3 = (gast1 / 100) * porc1 + gast1;
            console.log("Se le cobrará un porcentaje del 15%.");
            console.log(`El saldo que debe pagar es de ${tot3} pesos por su llamada.`);
            break;
        case "tarde":
            tot4 = (gast1 / 100) * porc2 + gast1;
            console.log("Se le cobrará un porcentaje del 10%.");
            console.log(`El saldo que debe pagar es de ${tot4} pesos por su llamada.`);
            break;
        default:
            console.log("Disculpe, llame en otro momento.");
            break;
    }
}
