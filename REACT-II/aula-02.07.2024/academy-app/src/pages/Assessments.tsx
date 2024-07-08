import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAssessments } from '../configs/services/academy-api/assessments/assessments.service';
import { Assessment } from '../configs/services/academy-api/assessments/assessments.types';

export function Assessments() {
  const [assessments, setAssessments] = useState<Array<Assessment>>([]);
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    } else {
      listAssessments(authToken);
    }
  }, [navigate, authToken]);


  async function listAssessments(authToken: string) {
    const resultado = await getAssessments({ token: authToken });

    if(!resultado.ok) {
      alert(resultado.message);
      return
    }

    setAssessments(resultado.data!);
  }

 

  return (
    <>
      <h1>Avaliações</h1>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Nota</th>
            <th>Prazo de entrega</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{Number(item.rate).toFixed(1)}</td>
                <td>{new Date(item.deadline).toLocaleDateString("pt-BR", { dateStyle: 'short'})}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
