import { Link } from 'react-router-dom';
import { CardStyled } from '../components/styled/CardStyled';
import { InputGroupStyled } from '../components/styled/InputGroupStyled';
import { WrapperStyled } from '../components/styled/WrapperStyled';

export function Login() {
    return (
        <WrapperStyled>
            <CardStyled>
                <h1>Login</h1>

                <form>
                    <InputGroupStyled>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                    </InputGroupStyled>

                    <InputGroupStyled>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" />
                    </InputGroupStyled>

                    <InputGroupStyled>
                        <button type="submit">Entrar</button>
                    </InputGroupStyled>
                </form>

                <div>
                    <small>
                        Não é cadastrado? <Link to={'/signup'}>Cadastre-se aqui</Link>
                    </small>
                </div>
            </CardStyled>
        </WrapperStyled>
    )
}