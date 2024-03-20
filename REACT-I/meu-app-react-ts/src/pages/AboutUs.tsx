import { Fragment } from 'react/jsx-runtime';
import { Title } from '../components/Title';

export function AboutUs() {
    return (
        <Fragment>
            <Title texto='Sobre Nós' numero={2024} />
            <h2>Subtitulo da Página</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum quos exercitationem! Alias doloremque libero expedita, veritatis facere, ut quidem adipisci obcaecati facilis, tenetur mollitia quis cumque corrupti dicta aperiam.
            </p>
            <button>Clique em mim!</button>
        </Fragment>
    )
}