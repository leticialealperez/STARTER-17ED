import { Fragment } from 'react/jsx-runtime';
import { Button } from '../components/styled/Button';
import { ContainerFlex } from '../components/styled/Container';
import { Title } from '../components/styled/Title';

export function Home() {
    return (
        <Fragment>
            <ContainerFlex>
                <Title>Um texto qualquer</Title>

                <Button>Clique em Mim!</Button>
            </ContainerFlex>
        </Fragment>
    )
}