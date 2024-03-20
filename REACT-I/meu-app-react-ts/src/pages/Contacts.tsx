import { Fragment } from 'react/jsx-runtime';
import { Title } from '../components/Title';

export function Contacts() {
    return (
        <Fragment>
            <Title texto='Contatos' numero={5}/>
            <button>Clique em mim!</button>
        </Fragment>
    )
}