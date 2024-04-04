import { Fragment } from 'react/jsx-runtime';
import { Modal } from '../components/functional/Modal';
import { ContainerFlex } from '../components/styled/Container';
import { Title } from '../components/styled/Title';

export function Home() {


    return (
        <Fragment>
            <ContainerFlex>
                <Title>Home</Title>
            </ContainerFlex>
            <Modal />
        </Fragment>
    )
}