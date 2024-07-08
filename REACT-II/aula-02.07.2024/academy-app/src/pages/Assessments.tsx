import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitleStyled } from '../components/styled/PageTitleStyled';
import { PaginationStyled } from '../components/styled/PaginationStyled';
import { TableStyled } from '../components/styled/TableStyled';
import { getAssessments } from '../configs/services/academy-api/assessments/assessments.service';
import { Assessment } from '../configs/services/academy-api/assessments/assessments.types';

export function Assessments() {
  const [assessments, setAssessments] = useState<Array<Assessment>>([]);
  const [showBtnPrev, setShowBtnPrev] = useState(true);
  const [showBtnNext, setShowBtnNext] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    } else {
      listAssessments(authToken, page, limit);
    }
  }, [navigate, authToken, page, limit]);

  async function listAssessments(authToken: string, page: number, limit: number) {
    const resultado = await getAssessments({ token: authToken, page, limit });

    if (!resultado.ok) {
      alert(resultado.message);
      setAssessments([]);
      return
    }

    setAssessments(resultado.data!);
    setTotalPages(resultado.pagination!.totalPages);
    setShowBtnNext((resultado.pagination!.page + 1) < resultado.pagination!.totalPages);
    setShowBtnPrev((resultado.pagination!.page - 1) > 0);
  }



  return (
    <Fragment>
      <PageTitleStyled>
        <h1>Avaliações do Aluno</h1>
        <hr />
      </PageTitleStyled>

      <TableStyled>
        <thead>
          <tr>
            <th>Título</th>
            <th>Nota</th>
            <th>Prazo de entrega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{Number(item.rate).toFixed(1)}</td>
                <td>{new Date(item.deadline).toLocaleDateString("pt-BR", { dateStyle: 'short' })}</td>

                <td>
                  <button>Atualizar</button>
                  <button>Deletar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableStyled>

      <PaginationStyled>
        <div>
          <label htmlFor="limit">Registros por página</label>
          <select name="limit" id="limit" value={limit} onChange={(ev) => setLimit(Number(ev.target.value))}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div>
          {showBtnPrev && (
            <button onClick={() => {
              setPage((currentValue) => currentValue - 1)
            }}>Anterior</button>
          )}

          <span>Página {page} de {totalPages}</span>
 
          {showBtnNext && (
            <button onClick={() => {
              setPage((currentValue) => currentValue + 1)
            }}>Próxima</button>
          )}
        </div>
      </PaginationStyled>
    </Fragment>
  );
}
