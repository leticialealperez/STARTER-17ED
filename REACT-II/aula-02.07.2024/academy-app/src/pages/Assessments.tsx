import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAssessments } from "../configs/services/academy-api/assessments.service";

export function Assessments() {
  const [assessments, setAssessments] = useState([]);
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  async function listAssessments() {
    const resultado = await getAssessments(authToken!);
    setAssessments(resultado.data);
  }

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    }
  }, [navigate, authToken]);

  useEffect(() => {
    listAssessments();
  }, []);

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
                <td>{item.rate}</td>
                <td>{item.deadline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
