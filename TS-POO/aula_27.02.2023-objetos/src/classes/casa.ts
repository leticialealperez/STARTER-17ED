
export class Casa {
    janelas: number;
    altura: number;
    largura: number;

    constructor(janelas: number, alt: number, larg?: number) {
        // this => a referencia para esta instancia de classe
        this.janelas = janelas;
        this.altura = alt;
        this.largura = larg ?? 3;
    }

    // métodos / ação
    abrirJanela(): void {
        console.log("Janela abriu!")
    }

    fecharJanela(): void {
        console.log("Janela fechou!")
    }

}

// FORMA MAIS AVANÇADA DE DEFINIR UMA CLASSE - declara e atribui suas propriedades diretamente na definição do constructor

// export class Casa {
//     constructor(
//         public janelas: number, 
//         public altura: number, 
//         public largura: number = 3,
//     ) { }

//     abrirJanela(): void {
//         console.log("Janela abriu!")
//     }

//     fecharJanela(): void {
//         console.log("Janela fechou!")
//     }

// }


