let continua: boolean = true;
let contador: number = 1;

do {
    console.log(`Repetiu ${contador}x.`);
    contador++;

    continua = window.confirm("Deseja continuar?");
} while(continua === true);