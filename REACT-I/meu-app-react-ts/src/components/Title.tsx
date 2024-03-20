
// todo parametro deve ser um objeto
interface TitleProps {
    texto: string;
    numero: number;
}

export function Title(props: TitleProps) {
    return <h1>{props.texto} - {props.numero}</h1>
}