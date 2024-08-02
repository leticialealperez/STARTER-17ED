import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { v4 as randomUUID } from "uuid";
import { useAppDispatch } from "../../store/hooks";
import { addAssessment } from "../../store/modules/assessments/assessmentsSlice";

export function FloatButton() {
  const dispatch = useAppDispatch();
  return (
    <Fab
      color='secondary'
      aria-label='add'
      sx={{ position: "fixed", right: "45px", bottom: "30px" }}
      onClick={() => {
        dispatch(
          addAssessment({
            id: randomUUID(),
            title: "Atividade Exemplo",
            rate: 10,
            deadline: new Date(),
          }),
        );
      }}
    >
      <AddIcon />
    </Fab>
  );
}
