import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatButtonStyled } from '../components/styled/FloatButtonStyled';
import { PageTitleStyled } from '../components/styled/PageTitleStyled';
import { PaginationStyled } from '../components/styled/PaginationStyled';
import { TableStyled } from '../components/styled/TableStyled';
import { createAssessment, getAssessments } from '../configs/services/academy-api/assessments/assessments.service';
import { Assessment } from '../configs/services/academy-api/assessments/assessments.types';
import { InputGroupStyled } from "../components/styled/InputGroupStyled";
import { Modal } from "../components/functionals/Modal";
import { ModalButton } from "../components/styled/Modal/ModalButton";

export function Assessments() {
  const formRef = useRef<HTMLFormElement>(null);

  const [assessments, setAssessments] = useState<Array<Assessment>>([]);
  const [showBtnPrev, setShowBtnPrev] = useState(true);
  const [showBtnNext, setShowBtnNext] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);

  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
 
  const openModalCached = useCallback((mode: "create" | "update") => {
    if(mode === "create"){
      setModalCreateIsOpen(true)
    } else {
      setModalUpdateIsOpen(true)
    }
  },[]);

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

  const createAssessments = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date(event.currentTarget.deadline.value);

    const data = {
      token: authToken!,
      title: event.currentTarget.assessments_title.value,
      rate: Number(event.currentTarget.rate.value),
      deadline: date.toString(),
    };

    const resultado = await createAssessment(data);
    if (!resultado.ok) {
      alert(resultado.message);
      return;
    }

    if (formRef.current) {
      formRef.current.reset();
    }

    alert(resultado.message);

    setModalCreateIsOpen(false);
  };


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
                  <button onClick={() => openModalCached("update")}>Atualizar</button>
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

      <FloatButtonStyled onClick={()=> openModalCached("create")}>+</FloatButtonStyled>

      <Modal
        titulo="Cadastrar Avaliação"
        open={modalCreateIsOpen}
        setOpen={setModalCreateIsOpen}>
          <form ref={formRef} onSubmit={createAssessments}>
            <InputGroupStyled>
              <label htmlFor="assessments_title">Título</label>
              <input type="text" name="assessments_title" id="assessments_title" required />
            </InputGroupStyled>

            <InputGroupStyled>
              <label htmlFor="rate">Nota</label>
              <input type="text" name="rate" id="rate" required />
            </InputGroupStyled>

            <InputGroupStyled>
              <label htmlFor="deadline">Prazo de entrega</label>
              <input type="date" name="deadline" id="deadline" required />
            </InputGroupStyled>

            <ModalButton type="submit">Cadastrar</ModalButton>
          </form>
      </Modal>

      {/* modal update */}
      <Modal
        titulo="Atualizar Avaliação"
        open={modalUpdateIsOpen}
        setOpen={setModalUpdateIsOpen}>
          <form>
            <InputGroupStyled>
              <label htmlFor="titulo">Título</label>
              <input type="text" name="titulo" id="titulo" required />
            </InputGroupStyled>

            <InputGroupStyled>
              <label htmlFor="rate">Nota</label>
              <input type="text" name="rate" id="rate" required />
            </InputGroupStyled>

            <InputGroupStyled>
              <label htmlFor="deadline">Prazo de entrega</label>
              <input type="date" name="deadline" id="deadline" required />
            </InputGroupStyled>
          </form>
      </Modal>
    </Fragment>
  );
}
