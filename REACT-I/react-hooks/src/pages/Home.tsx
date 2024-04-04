import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Button } from '../components/styled/Button';
import { ContainerFlex } from '../components/styled/Container';
import { Title } from '../components/styled/Title';

export function Home() {
    const [contador, setContador] = useState<number>(0);

    console.log(contador);

    return (
        <Fragment>
            <ContainerFlex>
                
                <Button onClick={() => {
                    setContador((currentValue) => currentValue + 1);
                }}>+</Button> 

                <Title>Contador: {contador}</Title>

                <Button onClick={() => {
                    setContador((currentValue) => currentValue - 1);
                }}>-</Button> 
            </ContainerFlex>
        </Fragment>
    )
}