import { Box, Container, Stack, Typography } from "@mui/material";
import { FloatButton } from "../components/functionals/FloatButton";
import { Footer } from "../components/functionals/Footer";
import { Header } from "../components/functionals/Header";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteAssessment, listAssessments } from "../store/modules/assessments/assessmentsSlice";

export function Assessments() {
  const assessments = useAppSelector((state) => listAssessments(state.assessments));

  const dispatch = useAppDispatch();

  return (
    <Container maxWidth='xl' sx={{ minHeight: "100vh" }}>
      <Header />

      <Box component='main'>
        <Typography variant='h2' component='h1' align='center'>
          Avaliações
        </Typography>

        <Stack>
          {assessments.map((a) => (
            <Typography
              variant='h5'
              onClick={() => {
                dispatch(deleteAssessment(a.id));
              }}
              key={a.id}
            >
              {a.title}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Footer />

      <FloatButton />
    </Container>
  );
}
