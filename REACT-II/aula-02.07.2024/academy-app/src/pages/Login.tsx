import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardStyled } from '../components/styled/CardStyled';
import { InputGroupStyled } from '../components/styled/InputGroupStyled';
import { WrapperStyled } from '../components/styled/WrapperStyled';
import { login } from '../configs/services/academy-api/auth/auth.service';

export function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");

        if(authToken) {
            navigate("/home");
        }
    }, [navigate])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const credentials = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        }

        const resultado = await login(credentials);

        if(!resultado.ok) {
            alert(resultado.message);
            return;
        }

        localStorage.setItem("authToken", JSON.stringify(resultado.data));
        (event.target as HTMLFormElement).reset();

        alert(resultado.message);
        navigate('/home');
    }

    return (
        <WrapperStyled>
            <CardStyled>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <InputGroupStyled>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" required />
                    </InputGroupStyled>

                    <InputGroupStyled>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" required />
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