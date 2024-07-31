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
import { useMemo } from "react";
import { ListItemCart } from "../components/functionals/ListItemCart";
import { currencyFormatter } from "../configs/utils/currency-formatter";
import { useAppSelector } from "../store/hooks";
import { selectCart } from "../store/modules/cart/cartSlice";

const steps = ["Revisão", "Entrega", "Pagamento"];

export function Cart() {
  const cart = useAppSelector(selectCart);

  // useMemo - memoiza(mantem em cache) o resultado/retorno de uma função
  const qtdTotalProducts = useMemo(() => {
    const total = cart.orders.reduce((acc, order) => acc + order.quantity, 0);

    return total;
  }, [cart.orders]);

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
              {!cart.orders.length ? (
                <Typography>Sem itens no carrinho</Typography>
              ) : (
                cart.orders.map((order, index) => (
                  <ListItemCart
                    key={index}
                    order={order}
                    showDivider={index !== cart.orders.length - 1}
                  />
                ))
              )}
            </List>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Divider variant='fullWidth' sx={{ borderColor: "#3a3a3a" }} />
          </Grid>

          <Grid item xs={12} sm={9} marginTop={1}>
            <Typography variant='h5' textAlign='end'>
              Subtotal ({qtdTotalProducts} produtos): {currencyFormatter.format(cart.amount)}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
