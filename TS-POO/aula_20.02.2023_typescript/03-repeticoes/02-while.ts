let continua: boolean = true;
let contador: number = 1;

while(continua === true) {
    console.log(`Repetiu ${contador}x.`);
    contador++;

    continua = window.confirm("Deseja continuar?");
}
