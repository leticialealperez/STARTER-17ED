import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Button } from '../components/styled/Button';
import { ContainerFlex } from '../components/styled/Container';
import { Title } from '../components/styled/Title';

export function Home() {
    const [contador, setContador] = useState<number>(1);

    console.log(contador);

    return (
        <Fragment>
            <ContainerFlex>
                <Title>Contador: {contador}</Title>
                <Button onClick={() => {
                    setContador((currentValue) => currentValue + 1);
                }}>Incrementar</Button> 

                <Button onClick={() => {
                    setContador((currentValue) => currentValue - 1);
                }}>Decrementar</Button> 
            </ContainerFlex>
        </Fragment>
    )
}