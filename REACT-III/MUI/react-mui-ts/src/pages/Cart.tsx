import {
  Container,
  Divider,
  Grid,
  List,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { ListItemCart } from "../components/functionals/ListItemCart";
import { products } from "../configs/data/products.data";

const steps = ["Revisão", "Entrega", "Pagamento"];

export function Cart() {
  return (
    <Container component='main' maxWidth='lg' sx={{ minHeight: "80vh" }}>
      <Typography variant='h4' textAlign='center'>
        Carrinho de compras
      </Typography>
      <Stack marginTop={5} spacing={5}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={9}>
            <List
              sx={{
                width: "100%",
                maxHeight: "60vh",
                overflow: "auto",
                bgcolor: "background.paper",
              }}
            >
              {products.map((product, index) => (
                <ListItemCart
                  key={product.id}
                  product={product}
                  showDivider={index !== products.length - 1}
                />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Divider variant='fullWidth' sx={{ borderColor: "#3a3a3a" }} />
          </Grid>
          <Grid item xs={12} sm={9} marginTop={1}>
            <Typography variant='h5' textAlign='end'>
              Subtotal (3 produtos): R$10.545,00
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
