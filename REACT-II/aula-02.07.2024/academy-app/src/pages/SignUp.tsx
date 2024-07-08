import { Link, useNavigate } from "react-router-dom";
import { CardStyled } from "../components/styled/CardStyled";
import { InputGroupStyled } from "../components/styled/InputGroupStyled";
import { WrapperStyled } from "../components/styled/WrapperStyled";
import { signUp } from '../configs/services/academy-api/students/students.service';

export function SignUp() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      name: event.currentTarget['name-student'].value,
      document: event.currentTarget.document.value,
      email: event.currentTarget.email.value,
      age: parseInt(event.currentTarget.age.value),
      password: event.currentTarget.password.value,
    };

    const resultado = await signUp(data);

    if (!resultado.ok) {
      alert(resultado.message);
      return;
    }

    alert(resultado.message);
    navigate("/");
  }

  return (
    <WrapperStyled>
      <CardStyled>
        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit}>
          <InputGroupStyled>
            <label htmlFor="name-student">Nome</label>
            <input type="text" name="name-student" id="name-student" required />
          </InputGroupStyled>

          <InputGroupStyled>
            <label htmlFor="document">Documento</label>
            <input
              type="text"
              name="document"
              id="document"
              maxLength={11}
              required
            />
          </InputGroupStyled>

          <InputGroupStyled>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required />
          </InputGroupStyled>

          <InputGroupStyled>
            <label htmlFor="age">Idade</label>
            <input type="number" name="age" id="age" min={18} required/>
          </InputGroupStyled>

          <InputGroupStyled>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" required minLength={6}/>
          </InputGroupStyled>

          <InputGroupStyled>
            <button type="submit">Cadastrar</button>
          </InputGroupStyled>
        </form>

        <div>
          <small>
            Já tem cadastro? <Link to={"/"}>Login</Link>
          </small>
        </div>
      </CardStyled>
    </WrapperStyled>
  );
}
