import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { Product } from "../../configs/interfaces/product";
import { currencyFormatter } from "../../configs/utils/currency-formatter";
import { useAppDispatch } from "../../store/hooks";
import { decrementar } from "../../store/modules/counter/counterSlice";

interface CardProductProps {
  product: Product;
}

export function CardProduct(props: CardProductProps) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardMedia
        component='img'
        alt='image of product'
        height='150'
        image={props.product.imageUrl}
      />

      <CardContent>
        <Typography gutterBottom variant='h5'>
          {props.product.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.product.description}
        </Typography>
        <Typography variant='h5' marginTop={2}>
          {currencyFormatter.format(props.product.price)}
        </Typography>
      </CardContent>

      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Stack direction='row' spacing={2} justifyContent='center'>
              <IconButton
                disabled={quantity <= 1}
                size='small'
                color='primary'
                onClick={() => setQuantity((current) => current - 1)}
              >
                <RemoveIcon />
              </IconButton>

              <Typography variant='h5' component='span'>
                {quantity}
              </Typography>

              <IconButton
                size='small'
                color='primary'
                onClick={() => setQuantity((current) => current + 1)}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Button
              color='primary'
              variant='contained'
              fullWidth
              onClick={() => {
                dispatch(decrementar());
              }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
