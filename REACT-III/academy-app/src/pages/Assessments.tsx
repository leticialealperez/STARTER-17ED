import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Card } from "../components/functionals/Card";
import { FloatButton } from "../components/functionals/FloatButton";
import { Footer } from "../components/functionals/Footer";
import { Header } from "../components/functionals/Header";
import { Modal } from "../components/functionals/Modal";
import { useAppSelector } from "../store/hooks";
import { listAssessments } from "../store/modules/assessments/assessmentsSlice";

export function Assessments() {
  const assessments = useAppSelector((state) => listAssessments(state.assessments));

  return (
    <Container maxWidth='xl' sx={{ minHeight: "100vh" }}>
      <Stack minHeight={"100vh"} justifyContent='space-between'>
        <Header />

        <Box component='main' minHeight={"80vh"}>
          <Typography variant='h3' component='h1' align='center'>
            Avaliações
          </Typography>

          <Grid container spacing={3} marginTop={3}>
            {assessments.map((a) => (
              <Grid key={a.id} item xs={12} sm={6} md={4} xl={3}>
                <Card assessment={a} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Footer />
      </Stack>

      <FloatButton />

      <Modal />
    </Container>
  );
}
